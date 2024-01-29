import React from 'react';
import BoxList from './BoxList';
import { render, fireEvent } from "@testing-library/react";

// Smoke test
it("renders without crashing", () => {
  render(<BoxList />);
});

// Snap test
it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

// Unit tests
it("should add a new box", () => {
  const { queryByText, getByLabelText } = render(<BoxList />);
  
  expect(queryByText("x")).not.toBeInTheDocument();
  
  fireEvent.change(getByLabelText("Background Color"), { target: {value: 'Red' }});
  fireEvent.change(getByLabelText("Box Height"), { target: {value: '500' }});
  fireEvent.change(getByLabelText("Box Width"), { target: {value: '500' }});
  fireEvent.click(queryByText("Add Box"));
  
  expect(queryByText("x")).toBeInTheDocument();
});

it("should delete a box", () => {
    const { queryByText, getByLabelText } = render(<BoxList />);

    // Add a box 
    expect(queryByText("x")).not.toBeInTheDocument();
  
    fireEvent.change(getByLabelText("Background Color"), { target: {value: 'Red' }});
    fireEvent.change(getByLabelText("Box Height"), { target: {value: '500' }});
    fireEvent.change(getByLabelText("Box Width"), { target: {value: '500' }});
    fireEvent.click(queryByText("Add Box"));
    
    expect(queryByText("x")).toBeInTheDocument();

    // Delete the box
    fireEvent.click(queryByText("x"));
    expect(queryByText("x")).not.toBeInTheDocument();
});