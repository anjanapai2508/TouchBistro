import axios from 'axios';
const url = 'http://localhost:8000/';

//Test case for get url
describe('Get Homepage', () => {
  test('HomePage Route', async () => {
    const res = await axios.get(url);
    expect(res).toBeTruthy();
    expect(res.status).toBe(200);
    expect(res.data).toEqual('Hello World from the Typescript inside Router');
  });
});

//Test case for prime numbers route.


//Test case for median route.









