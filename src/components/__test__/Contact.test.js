import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  //Assertion
  expect(heading).toBeInTheDocument();
});

test("Should load input contact us component", () => {
  render(<Contact />);
  const input = screen.getByPlaceholderText("Name");
  //Assertion
  expect(input).toBeInTheDocument();
});

test("Should load button in contact us component", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");
  //Assertion
  expect(button).toBeInTheDocument();
});

test("Should load 2 input box contact us component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox"); //textbox is for input.
  //console.log(inputBoxes); array of "react elements" input box
  //Assertion
  expect(inputBoxes.length).toBe(2);
});
