import React from 'react';
import NewTodoForm from './NewTodoForm';
import { render } from "@testing-library/react";

// Smoke test
it("renders without crashing", function () {
  render(<NewTodoForm />);
});

// Snap test
it("matches snapshot", function () {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
  });