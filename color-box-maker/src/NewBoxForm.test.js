import React from 'react';
import NewBoxForm from './NewBoxForm';
import { render } from "@testing-library/react";

// Smoke test
it("renders without crashing", function () {
  render(<NewBoxForm />);
});

// Snap test
it("matches snapshot", function () {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  });