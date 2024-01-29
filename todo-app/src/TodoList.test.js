import React from 'react';
import TodoList from './TodoList';
import { render, fireEvent } from "@testing-library/react";

// Smoke test
it("renders without crashing", () => {
  render(<TodoList />);
});

// Snap test
it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

// Unit tests
it("should add a new todo", () => {
  const { queryByText, getByLabelText } = render(<TodoList />);
  
  expect(queryByText("Reading")).not.toBeInTheDocument();
  
  fireEvent.change(getByLabelText("Task:"), { target: {value: 'Reading' }});
  fireEvent.click(queryByText("Add Todo"));
  
  expect(queryByText("Reading")).toBeInTheDocument();
});

it("should delete a todo", () => {
    const { queryByText, getByLabelText } = render(<TodoList />);

    // Add a box 
    expect(queryByText("Jogging")).not.toBeInTheDocument();
  
    fireEvent.change(getByLabelText("Task:"), { target: {value: 'Jogging' }});
    fireEvent.click(queryByText("Add Todo"));
    
    expect(queryByText("Jogging")).toBeInTheDocument();

    // Delete the box
    fireEvent.click(queryByText("x"));
    expect(queryByText("Jogging")).not.toBeInTheDocument();
});