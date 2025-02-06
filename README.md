# NUMBER CLASSIFICATION API

This is a simple public API that takes a number and returns interesting mathematical properties about it, along with a fun fact from [Number API](http://numbersapi.com/#42).<br>
The project was built with Express.js and deployed on Vercel.

## Features
This API takes a query number which is a valid integer and returns the following: <br>
- The query number.
- Boolean value indicating whether the number is prime.
- Boolean value indicating whether the number is a perfect number.
- An array of properties associated with the number (e.g. Armstrong, even or odd).
- The sum of the digits of the number.
- A fun fact about the number retrieved from the Numbers API.

<hr>

## Setup (local) Instructions
To run this locally, ensure you have the following installed: <br> 
- Node.js
- npm 
- Express

### Steps
1. Clone the repository:
   
   ```sh
     git clone https://github.com/Amyy16/hng12-stage1-number-api.git
   
     cd hng12-stage1-number-api
   ```
2. Install dependencies
   ```sh
     npm install
   ```
3. Create a .env file and specify a port
   ```sh
     PORT = 5000
   ```
4. Start the server
   ```sh
     npm start
   ```
5. Test the API with Postman or in your browser
   ```sh
     http://localhost:5000/api/classify-number?number=371
   ```
<hr>

## API DOCUMENTATION

### Base Url
  ```
    https://hng12-stage1-number-api.vercel.app/api/classify-number
  ```
### HTTP Method
```
   GET
```
### API Query
```
   number=371
```
### Response Format
#### Status: (200 OK)
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,  
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```
#### Status: (400 Bad Request)
```json
{
    "number": "alphabet",
    "error": true
}
```
