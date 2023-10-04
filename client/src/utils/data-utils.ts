import axios from "axios";
export async function getPrimeNumber(url: String, upperLimit: number) {
  try {
    const response = await axios.get(
      `${url}/${upperLimit}`
    );
    if (!response) {
      throw new Error(`Failed to fetch data: ${response}`);
    }
    const data = await response.data;
    return data;
  } catch (error: any) {
    console.error(`Error: ${error}`);
  }
}
