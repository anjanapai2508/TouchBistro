# Questions asked in challenge
1. Do you have production experience with Node prior to the submission of this code challenge? Is yes, for how long?

    Answer : Yes I have been working on Node projects for the past 4+ years and have production experience. I have worked on Node projects in previous companies and have also demostrated my knowlege by deploying this project onto a hosting platform similar to a production build. (check details below)

2. Do you have production experience with React prior to the submission of this code challenge? If yes, for how long?

    Answer : Yes I have been working on React projects for the past 4+ years.

3. Your Full Name : Anjana Ashok Pai

# Project Details :
 Full Stack Developer Challenge - the project displays a simple form in the front-end asking for an upper-limit and calculates the median of all prime numbers less than the upper limit.

# To Run the Project on your local server:
1. Clone the repository
    ```
    git clone https://github.com/anjanapai2508/TouchBistro.git
    ```

2. Browse to the client folder (../TouchBistro/client) and create a new file named `.env` and add the following variables to it
     ```
     REACT_APP_DEV_API_URL=http://localhost:8000/find-prime-numbers
     REACT_APP_ENV=development
     ```
3. Open terminal and browse to the client folder (../TouchBistro/client) and run the following commands to start the client
    ```
    npm i
    npm run build
    npm run start
    ```
4. Open terminal and browse to the server folder (../TouchBistro/server) and run the following commands to start the server
    ```
    npm install typescript && npm run build
    npm run dev
    ```
# Live Demo
App is hosted at [https://touch-bistro.onrender.com/](https://touch-bistro.onrender.com/)
Please note that the server might scale down in case of no activity, allow it a few minutes to scale up while running it for the first time.

# Testing
Test cases are included in the __test__ folder in both client and server folders. Unit and Integration tests are included in this folder.
To run the test cases 
  1. Make sure your local server is up and running
  2. On Terminal navigate to the client folder (../TouchBistro/client) and run the command
     ```
     npm test
     ```
 # Notes
 1. Server side algorithm follows Sieve of Eratosthenes algorithm to find the array of prime numbers.
 2. Program will take-in numeric value in the range of 3-10 million. A client-side validation has been setup to make sure the input values conforms to this range.

# Tech Stack: 
  1. Client-Side :
        1. Reactjs --> Javascript library for making web-apps.
        2. Tailwind css --> Css library for adding styles to your front-end without having to write the actual css.
        3. Jest --> Writing test cases.
        4. Axios -->  HTTP client for the browser and node.js (used to make http requests to the server and process response for the browser).


  2. Server-Side :
        1. ExpressJs --> Web framework for Node.js. 
        2. Jest --> Writing test cases.
    
# Future Improvements:
   1. Error Handling :
       1. Adding more test cases.
For example include test cases to test html alerts - those generated when UPPER LIMIT is less than {MIN_VALUE} or greater than {MAX_VALUE} and alert generated if empty UPPER LIMIT is sent etc.
On the server side tests need to be included to test the performance and reliability of the system - such as test to determine the response time for a very large upper limit and determine if the response time is acceptable.
       3. Implementing better error handling - currently the front-end code only logs and shows a server error if response returned is 500 but the code needs to handle all kinds of responses incase the server is down or having any issues and show appropriate messages to the user. This needs to be implemented.
   3. Scale (Handle requests where input number is > 10million) : Currently the server side code breaks if a number greater than 10 million is sent as the upper-limit, to resolve this implement optimization techniques such as parallel processing or divide the prime-number array into multiple parts or implement code to divide the array into even and odd numbers to reduce the size etc.
        
