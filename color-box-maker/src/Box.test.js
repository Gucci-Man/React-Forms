import React from 'react';
import Box from './Box';
import { render } from "@testing-library/react";

// Smoke test
it("renders without crashing", function () {
  render(<Box />);
});

// Snap test
it("matches snapshot", function () {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
  });