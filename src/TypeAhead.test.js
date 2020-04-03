import React from "react";
import { render } from "@testing-library/react";
import TypeAhead from "./TypeAhead";

test("renders learn react link", () => {
  const { getByText } = render(<TypeAhead />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
