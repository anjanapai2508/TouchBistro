export async function getPrimeNumber(url: String, upperLimit: number) {
    try {
      const response = await fetch(`http://localhost:8000/find-prime-numbers/${upperLimit}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
         return data;
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }
