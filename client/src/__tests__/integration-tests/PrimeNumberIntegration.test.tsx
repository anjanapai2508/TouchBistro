import axios from 'axios';

test('Test API endpoint for finding median of prime numbers', async () => {
    const upperLimit = 10; // Set the upper limit to test
    const apiUrl = `http://localhost:8000/find-prime-numbers/${upperLimit}`;
    try {
      const response = await axios.get(apiUrl);
      // Assert on the HTTP status code 
      expect(response.status).toBe(200);
      // Assert on the response data 
      const responseData = response.data;
      // For example, if the API returns an array of prime numbers, you can check its length
      //expect(Array.isArray(responseData)).toBe(true);
      expect(responseData).toHaveProperty('data');
      expect(Array.isArray(responseData.data)).toBe(true);
      expect(responseData).toEqual({"data":[3, 5]});
    } catch (error) {
      // Handle any errors, such as network errors or API failures
      console.error(error);
      throw error; // Re-throw the error to fail the test
    }
  });