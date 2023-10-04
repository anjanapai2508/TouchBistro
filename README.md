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
