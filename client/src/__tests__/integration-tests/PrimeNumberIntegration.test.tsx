import axios from 'axios';
import React from "react";
import { render, fireEvent, RenderResult, act, waitFor, getByRole } from "@testing-library/react";
import App from "../../App";
import "@testing-library/jest-dom/extend-expect";
import MockAdapter from "axios-mock-adapter";
import { SERVER_ERROR } from '../../utils/constants';



// Test if endpoint is returning back valid data for a valid upper limit.
test('Test API endpoint for finding median of prime numbers', async () => {
    const upperLimit = 10; // Set the upper limit to test
    const apiUrl = `http://localhost:8000/find-prime-numbers/${upperLimit}`;
    try {
      const response = await axios.get(apiUrl);
      // Assert on the HTTP status code 
      expect(response.status).toBe(200);
      // Assert on the response data 
      const responseData = response.data;
      expect(responseData).toHaveProperty('data');
      expect(Array.isArray(responseData.data)).toBe(true);
      expect(responseData).toEqual({"data":[3, 5]});
    } catch (error:any) {
      // Handle any errors, such as network errors or API failures
      console.error(error);
      throw error; // Re-throw the error to fail the test
    }
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
  const mock = new MockAdapter(axios);
  // Test if front-end is showing server error incase api returns an error
  test("displays error message on server error", async () => {
    // Mock the Axios request to respond with a server error
   
    mock.onGet("http://localhost:8000/find-prime-numbers/100").reply(500, "Server error occurred");
  
    const { getByText, queryByTestId } = render(<App />);
    const button = getByText("Find Median");
  
    // Simulate button click to trigger the Axios request
    act(() => {
    fireEvent.click(button);
    });
  
    // Wait for the error message to be displayed
    await waitFor(() => {
      const serverError = queryByTestId("serverError");
      expect(serverError).toBeInTheDocument();
      expect(serverError).toHaveTextContent(`${SERVER_ERROR}`);
    });
  });
  
  
  
  