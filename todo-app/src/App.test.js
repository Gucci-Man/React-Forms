import React from 'react';
import App from './App';
import { render } from "@testing-library/react";

// Smoke test
it("renders without crashing", function () {
  render(<App />);
});

// Snap test
it("matches snapshot", function () {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});