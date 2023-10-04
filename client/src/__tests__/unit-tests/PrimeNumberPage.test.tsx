import "@testing-library/jest-dom/extend-expect";
import { act, fireEvent, render } from "@testing-library/react";
import App from "../../App";

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