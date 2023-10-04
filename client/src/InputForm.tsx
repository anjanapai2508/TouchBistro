import React, { FormEvent, useState } from "react";
import {
  RESULT_LINE_1,
  RESULT_LINE_2,
  SERVER_ERROR,
  VALIDATION_ERROR,
} from "./utils/constants";
import { getPrimeNumber } from "./utils/data-utils";

const InputForm: React.FC = () => {
  const [upperLimit, setUpperLimit] = React.useState("");
  const [validationError, setValidationError] = useState("");
  const [result, setResult] = useState("");
  const [serverError, setServerError] = useState("");
  // Define the API URL based on the environment
  const apiBaseUrl =
    process.env.REACT_APP_ENV === "development"
      ? process.env.REACT_APP_DEV_API_URL
      : process.env.REACT_APP_PROD_API_URL;
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError("");
    setResult("");
    // Make sure that the upper limit is greater than 2
    if (!upperLimit || parseInt(upperLimit, 10) < 3) {
      setValidationError(`${VALIDATION_ERROR}`);
      return; // Exit the function without making the API request
    }
    try {
      const response = await getPrimeNumber(
        `${apiBaseUrl}`,
        parseInt(upperLimit, 10)
      );
      setResult(
        `${RESULT_LINE_1} ${upperLimit} is <b>${response.data}</b>!</br> ${RESULT_LINE_2}`
      );
    } catch (error: any) {
      setServerError(`${SERVER_ERROR}`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen font-mono">
      <h1 className="text-3xl font-bold mb-6">Median Finder</h1>
      {/* display server error */}
      {serverError && (
        <div
          id="serverError"
          data-testid="serverError"
          className="text-red-500 text-lg"
        >
          {serverError}
        </div>
      )}
      <form
        className="w-full max-w-sm"
        onSubmit={handleSubmit}
        id="median-form"
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-upper-limit"
            >
              Upper Limit
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-upper-limit"
              type="number"
              value={upperLimit}
              onChange={(e) => {
                setUpperLimit(e.target.value);
                setValidationError(""); // Clear any previous error
              }}
              placeholder="100"
              required
            />
          </div>
        </div>
        {/* Validation Error message */}
        {validationError && (
          <div
            id="validationError"
            data-testid="validationError"
            className="text-red-500 text-sm mb-4"
          >
            {validationError}
          </div>
        )}
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              data-testid="button"
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Find Median
            </button>
          </div>
        </div>
        {/* Result display */}
        {result && (
          <div
            id="result"
            data-testid="result"
            className="text-black-500 text-lg border-2 border-indigo-200 rounded mx-8 my-8 py-4 shadow-md shadow-lg shadow-indigo-500/50 bg-gray-200"
            dangerouslySetInnerHTML={{ __html: result }} // Render HTML content
          ></div>
        )}
      </form>
    </div>
  );
};

export default InputForm;
