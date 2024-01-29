import React from 'react';
import Todo from './Todo';
import { render } from "@testing-library/react";

// Smoke test
it("renders without crashing", function () {
  render(<Todo />);
});

// Snap test
it("matches snapshot", function () {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
  });