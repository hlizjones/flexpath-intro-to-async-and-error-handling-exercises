import { fileURLToPath } from "url";
import { EventEmitter } from "events";
import fs from "fs";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  /*

    To run the code you write for each exercise, change the `exercise_01()` 
    code below to match the EXACT name
    of the exercise, as it is written in the line `function exercise_xx`.
    
     For Example:

     If I want to run exercise_05 below, 
     I would change the code below from "exercise_01()" to
     "exercise_05()", save this file. 
		 
		 Then, when I run this file by running `node exercise.js`
     in the VS Code terminal while inside this folder, your code 
     for exercise_05 will run.

  */

  // Modify the line of code BELOW to run a different exercise
  exercise_01();
  // Modify the line of code ABOVE to run a different exercise
}

function exercise_01() {
  /* 
   
    Exercise 1
    
    Synchronous vs. Asynchronous: 
		
		Log a message before and after a setTimeout.
  
  */
  // CODE IN THE OPEN LINES BELOW
  console.log("Start");
  setTimeout(() => console.log("Asynchronous Task"), 1000);
  console.log("End");
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_02() {
  /* 
   
    Exercise 2
    
     Callback Function: 
		 
		 Write a function that takes a callback and executes it.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function greet(callback) {
    console.log("Hello!");
    callback();
  }
  greet(() => console.log("Callback executed!"));
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_03() {
  /* 
   
    Exercise 3
    
    Nested Callbacks: 
		
		Create a function with three nested callbacks to simulate callback hell.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function fetchData(callback1, callback2, callback3) {
    setTimeout(() => {
      console.log("Fetched data");
      callback1(() => {
        console.log("Processed data");
        callback2(() => {
          console.log("Saved data");
          callback3();
        });
      });
    }, 1000);
  }
  fetchData(
    (next) => next(() => console.log("All done")),
    (next) => next(() => console.log("Almost there")),
    () => console.log("Finished")
  );
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_04() {
  /* 
   
    Exercise 4
    
    Promises: 
		
		Create a simple promise that resolves after 2 seconds.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved!"), 2000);
  });
  myPromise.then((result) => console.log(result));
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_05() {
  /* 
   
    Exercise 5
    
    Promise Chaining: 

		Copy the promise you wrote from exercise_04 and paste it below.
		Chain multiple `then` calls on the promise.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved!"), 2000);
  });
  myPromise
    .then((result) => {
      console.log(result);
      return "Next step";
    })
    .then((step) => {
      console.log(step);
      return "Final step";
    })
    .then((final) => console.log(final));
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_06() {
  /* 
   
    Exercise 6
    
    Creating a Custom Promise: 
		
		Wrap `setTimeout` in a promise.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  delay(1000).then(() => console.log("1 second delay complete"));
  // CODE IN THE OPEN LINES ABOVE
}

async function exercise_07() {
  /* 
   
    Exercise 7
    
    Async Function: 
		
		Copy the promise you wrote from exercise_04 and paste it below.
		Write an `async` function that awaits the promise.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved!"), 2000);
  });
  async function asyncFunction() {
    const result = await myPromise;
    console.log(result);
  }
  asyncFunction();
  // CODE IN THE OPEN LINES ABOVE
}

async function exercise_08() {
  /* 
   
    Exercise 8
    
    Try-Catch with Async/Await: 
		
		Copy the promise you wrote from exercise_04 and paste it below.
		Use a `try-catch` block in an `async` function.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved!"), 2000);
  });
  async function fetchDataAsync() {
    try {
      const data = await myPromise;
      console.log(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  fetchDataAsync();
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_09() {
  /* 
   
    Exercise 9
    
    Error Handling: 
		
		Write a `try-catch` block that catches a thrown error.
  
  */
  // CODE IN THE OPEN LINES BELOW
  try {
    throw new Error("Something went wrong");
  } catch (error) {
    console.error("Caught error:", error.message);
  }
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_10() {
  /* 
   
    Exercise 10
    
    Throwing an Error: 
		
		Create a function that throws an error if a condition is not met.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function validateAge(age) {
    if (age < 18) throw new Error("Age must be 18 or older");
    console.log("Age is valid");
  }
  try {
    validateAge(16);
  } catch (error) {
    console.error(error.message);
  }
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_11() {
  /* 
   
    Exercise 11
    
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_12() {
  /* 
   
    Exercise 12
    
    Using the EventEmitter: Create and use an EventEmitter.
		The EventEmitter object has been imported for you at the top of this file
  
  */
  // CODE IN THE OPEN LINES BELOW

  const emitter = new EventEmitter();
  emitter.on("event", (message) => console.log("Event received:", message));
  emitter.emit("event", "Hello, Event!");

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_13() {
  /* 
   
    Exercise 13
    
    Reading a File with Callback: 
		
		Use `fs.readFile` with a callback (Node.js).
  
  */
  // CODE IN THE OPEN LINES BELOW
  fs.readFile("./data.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
    } else {
      console.log("File content:", data);
    }
  });
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_14() {
  /* 
   
    Exercise 14
    
    Reading a File with Promises: 
		
		Use `fs.promises.readFile` (Node.js).
  
  */
  // CODE IN THE OPEN LINES BELOW
  const fsPromises = fs.promises;
  fsPromises
    .readFile("./data.json", "utf8")
    .then((data) => console.log("File content:", data))
    .catch((err) => console.error("Error reading file:", err));
  // CODE IN THE OPEN LINES ABOVE
}

async function exercise_15() {
  /* 
   
    Exercise 15
    
    Async File Read: 
		
		Read a file using `async` and `await`.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const fsPromises = fs.promises;
  async function readFileAsync() {
    try {
      const data = await fsPromises.readFile("./data.json", "utf8");
      console.log("Async file content:", data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  readFileAsync();
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_16() {
  /* 
   
    Exercise 16
    
    Fetch API: 
		
		Use the `fetch` API to make a GET request.
  
  */
  // CODE IN THE OPEN LINES BELOW
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log("Fetched data:", data))
    .catch((error) => console.error("Error:", error.message));
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_17() {
  /* 
   
    Exercise 17

    Using a Custom Error: 

		Throw a custom error with a name and message.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  function fetchUserData(userId) {
    if (!userId) throw new Error("User ID is required");
    console.log("Fetching data for user:", userId);
  }
  try {
    fetchUserData();
  } catch (error) {
    console.error(error.message);
  }
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_18() {
  /* 
   
    Exercise 18
    
    Retry Logic: 
		
		Create a simple retry mechanism for a function.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function retry(fn, retries) {
    let attempt = 0;
    function execute() {
      try {
        fn();
      } catch (error) {
        if (attempt < retries) {
          attempt++;
          console.log(`Retrying... (${attempt})`);
          execute();
        } else {
          console.error("Failed after retries:", error.message);
        }
      }
    }
    execute();
  }
  retry(() => {
    if (Math.random() > 0.5) throw new Error("Random failure");
    console.log("Success!");
  }, 3);
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_19() {
  /* 
   
    Exercise 19
    
    Using `Promise.all`: 
		
		Make two promises run concurrently.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const promise1 = delay(1000).then(() => "First Promise");
  const promise2 = delay(2000).then(() => "Second Promise");
  Promise.all([promise1, promise2]).then((results) =>
    console.log("Results:", results)
  );
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_20() {
  /* 
   
    Exercise 20
    
    Using `Promise.race`: 
		
		Log the result of the first promise to complete.
  
  */
  // CODE IN THE OPEN LINES BELOW
  Promise.race([promise1, promise2]).then((result) =>
    console.log("First to finish:", result)
  );
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_21() {
  /* 
   
    Exercise 21
    
    Using `Promise.allSettled`: 
		
		Get the status of multiple promises.
  
  */
  // CODE IN THE OPEN LINES BELOW
  Promise.allSettled([promise1, promise2, Promise.reject("Error")]).then(
    (results) => console.log("All Settled Results:", results)
  );
  // CODE IN THE OPEN LINES ABOVE
}

async function exercise_22() {
  /* 
   
    Exercise 22
    
    Handling API Response: 
		
		Check if a fetch response is okay
  
  */
  // CODE IN THE OPEN LINES BELOW
  async function fetchDataFromAPI() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      console.log("API Data:", data);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  }
  fetchDataFromAPI();
  // CODE IN THE OPEN LINES ABOVE
}

async function exercise_23() {
  /* 
   
    Exercise 23
    
    Creating an API Request Wrapper: 
		
		Wrap fetch in a reusable function.
  
  */
  // CODE IN THE OPEN LINES BELOW
  async function apiRequest(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data");
      return await response.json();
    } catch (error) {
      console.error("API Request Error:", error.message);
    }
  }
  apiRequest("https://jsonplaceholder.typicode.com/users").then((data) =>
    console.log("User Data:", data)
  );
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_24() {
  /* 
   
    Exercise 24
    
    Event Handling Example: 
		
		Use Node.js's EventEmitter to handle a custom event.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const myEmitter = new EventEmitter();
  myEmitter.on("greet", (name) => console.log(`Hello, ${name}!`));
  setTimeout(() => myEmitter.emit("greet", "Alice"), 2000);
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_25() {
  /* 
   
    Exercise 25
    
    Throw and Catch Custom Error: 
		
		Create and catch a custom error.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function checkFile(fileName) {
    if (!fileName.endsWith(".json"))
      throw new Error("Only JSON files are allowed");
    console.log("File is valid");
  }
  try {
    checkFile("data.txt");
  } catch (error) {
    console.error("File Error:", error.message);
  }
  // CODE IN THE OPEN LINES ABOVE
}
