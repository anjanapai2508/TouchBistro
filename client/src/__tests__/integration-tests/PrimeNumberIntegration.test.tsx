import "@testing-library/jest-dom/extend-expect";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "../../App";

const apiBaseUrl = `http://localhost:8000/find-prime-numbers/`;

// Test if endpoint is returning back valid data for a valid upper limit.
test("Test API endpoint for finding median of prime numbers", async () => {
  const upperLimit = 10; // Set the upper limit to test
  const apiUrl = apiBaseUrl + upperLimit;
  const response = await axios.get(apiUrl);
  // Assert on the HTTP status code
  expect(response.status).toBe(200);
  // Assert on the response data
  const responseData = response.data;
  expect(responseData).toHaveProperty("data");
  expect(Array.isArray(responseData.data)).toBe(true);
  expect(responseData).toEqual({ data: [3, 5] });
});

// Test if front-end is showing appropriate result for a valid input
test("check if result is rendered for a valid input", () => {
  const { getByText, getByPlaceholderText, queryByTestId } = render(<App />);

  // Find the input box and button elements
  const inputBox = getByPlaceholderText("100");
  const button = getByText("Find Median");

  // Enter an valid input (e.g. 4)
  act(() => {
    fireEvent.change(inputBox, { target: { value: "4" } });
    fireEvent.click(button);
  });
  // Assert that the result message is displayed
  const resultText = queryByTestId("result");
  expect(resultText).toBeInTheDocument;
});

// Test if front-end is showing server error incase of error scenario
test("Test API endpoint for invalid input", async () => {
  let response;
  const { queryByTestId } = render(<App />);
  const upperLimit = 1000000000000;
  const apiUrl = apiBaseUrl + upperLimit;
  try {
    response = await axios.get(apiUrl);
  } catch (error: any) {
    // Assert on the HTTP status code
    if (response) {
      expect(response.status).toBe(500);
    }
    // Assert if server error is rendered
    await waitFor(() => {
      const serverError = queryByTestId("serverError");
      expect(serverError).toBeInTheDocument;
    });
  }
});
