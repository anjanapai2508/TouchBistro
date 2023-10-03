import React from "react";
import { render, fireEvent, RenderResult, act } from "@testing-library/react";
import App from "../../App";
import "@testing-library/jest-dom/extend-expect";

test("renders the App component", () => {
  const { getByText, getByPlaceholderText, queryByTestId } = render(<App />);

  // Test if the heading is rendered
  const heading = getByText("Median Finder");
  expect(heading).toBeInTheDocument();

  // Test if the input box is rendered
  const inputBox = getByPlaceholderText("100");
  expect(inputBox).toBeInTheDocument();

  // Test if the button is rendered
  const button = getByText("Find Median");
  expect(button).toBeInTheDocument();

  // Test if validation error is hidden initially when the page loads
  const validationErrorText = queryByTestId("validationError");
  expect(validationErrorText).toBeNull();

  // Test if result text is  hidden initially when the page loads
  const resultText = queryByTestId("result");
  expect(resultText).toBeNull();

  // Test if the upper limit label is rendered
  const label = getByText("Upper Limit");
  expect(label).toBeInTheDocument();

  // Test if server error is hidden initially when the page loads
  const serverErrorText = queryByTestId("serverError");
  expect(serverErrorText).toBeNull();

});

test("check if validation message is shown if upper-limit is <3", () => {
  const { getByText, getByPlaceholderText, queryByTestId } = render(<App />);

  // Find the input box and button elements
  const inputBox = getByPlaceholderText("100");
  const button = getByText("Find Median");

  // Enter an invalid input (e.g. 2)
  act(() => {
    fireEvent.change(inputBox, { target: { value: "2" } });
    fireEvent.click(button);
  });
  // Assert that the validation error message is displayed
  const validationErrorText = queryByTestId("validationError");
  expect(validationErrorText).toBeInTheDocument();
});

test("check if validation message is NOT shown if upper-limit is >2", () => {
  const { getByText, getByPlaceholderText, queryByTestId } = render(<App />);

  // Find the input box and button elements
  const inputBox = getByPlaceholderText("100");
  const button = getByText("Find Median");

  // Enter an valid input 
  act(() => {
  fireEvent.change(inputBox, { target: { value: "4" } });
  fireEvent.click(button);
  });

  // Assert that the validation error message is displayed
  const validationErrorText = queryByTestId("validationError");
  expect(validationErrorText).toBeNull();
});
