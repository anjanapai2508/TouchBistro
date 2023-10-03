import React from "react";
import { FormEvent, useState } from "react";
import { getPrimeNumber } from "./utils/data-utils";
import { RESULT_LINE_1, RESULT_LINE_2 } from "./utils/constants";

const InputForm: React.FC = () => {
  const [upperLimit, setUpperLimit] = React.useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Make sure that the upper limit is greater than 2
    if (!upperLimit || parseInt(upperLimit, 10) < 3) {
      setError("Upper Limit must be greater than or equal to 2.");
      return; // Exit the function without making the API request
    }
    try {
      const response = await getPrimeNumber(
        "http://localhost:8000/find-prime-numbers",
        parseInt(upperLimit, 10)
      );
      setResult(
        `${RESULT_LINE_1} ${upperLimit} is <b>${response.data}</b>!</br> ${RESULT_LINE_2}`
      ); // Set the result
      console.log("Response Data:", response);
    } catch (error) {
      alert("User Sign in Failed");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen font-mono">
      <div
        id="error-alert"
        className="hidden bg-red-200 border-red-500 text-red-700 border rounded-lg p-4 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
      >
        <p>The Upper Limit field is required.</p>
      </div>
      <h1 className="text-3xl font-bold mb-6">Median Finder</h1>
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
                setError(""); // Clear any previous error
              }}
              placeholder="100"
              required
            />
          </div>
        </div>
        {/* Error message */}
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
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
            className="text-green-500 text-lg"
            dangerouslySetInnerHTML={{ __html: result }} // Render HTML content
          ></div>
        )}
      </form>
    </div>
  );
};

export default InputForm;
