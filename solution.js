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
   
    Exercise 1: Understanding Synchronous vs. Asynchronous Operations
Problem:

Explain the difference between synchronous and asynchronous operations in JavaScript with examples. Write a synchronous function that logs numbers from 1 to 5, and an asynchronous function that does the same but with a delay of 1 second between each number.
  
  */
  // CODE IN THE OPEN LINES BELOW
  // Synchronous function
  function logNumbersSync() {
    for (let i = 1; i <= 5; i++) {
      console.log(i);
    }
  }

  logNumbersSync();
  // Outputs: 1 2 3 4 5 immediately

  // Asynchronous function
  function logNumbersAsync() {
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
  }

  logNumbersAsync();
  // Outputs: 1 2 3 4 5 with 1-second intervals

  /*
Explanation:

Synchronous operations execute code sequentially; each operation must complete before the next one starts.
Asynchronous operations allow the program to continue executing without waiting for an operation to finish.
In the asynchronous function, setTimeout is used to introduce a delay, simulating asynchronous behavior.
*/

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_02() {
  /* 
   
    Exercise 2: Use Cases for Asynchronous Logic
Problem:

Write an asynchronous function fetchData that simulates fetching data from an API using setTimeout. The function should accept a callback that processes the data once it's "fetched". Simulate a delay of 2 seconds.
  */
  // CODE IN THE OPEN LINES BELOW
  function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
      const data = { id: 1, message: "Hello, world!" };
      callback(data);
    }, 2000);
  }

  fetchData((data) => {
    console.log("Data received:", data);
  });

  // Outputs:
  // Fetching data...
  // (after 2 seconds)
  // Data received: { id: 1, message: 'Hello, world!' }
  /*
Explanation:

The fetchData function simulates an API call with a delay.
A callback function is passed to process the data once it's available.
  */
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_03() {
  /* 
   
    Exercise 3: Working with Callbacks
Problem:

Write a function readFile that simulates reading a file asynchronously. It should accept a filename and a callback function. If the filename is 'data.txt', it should return 'File content' after 1 second; otherwise, it should return an error.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function readFile(filename, callback) {
    setTimeout(() => {
      if (filename === "data.txt") {
        callback(null, "File content");
      } else {
        callback(new Error("File not found"));
      }
    }, 1000);
  }

  readFile("data.txt", (err, content) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(content);
    }
  });

  // Outputs after 1 second: File content

  readFile("missing.txt", (err, content) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(content);
    }
  });

  // Outputs after 1 second: File not found

  /*
Explanation:

The readFile function uses a callback to handle both success and error cases.
Error-first callbacks are a common pattern in Node.js and JavaScript.
  */

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_04() {
  /* 
   
   Exercise 4: Understanding Callback Hell
Problem:

Demonstrate "callback hell" by writing nested callbacks to perform three asynchronous tasks sequentially: task1, task2, and task3, each taking 1 second to complete.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function task1(callback) {
    setTimeout(() => {
      console.log("Task 1 completed");
      callback();
    }, 1000);
  }

  function task2(callback) {
    setTimeout(() => {
      console.log("Task 2 completed");
      callback();
    }, 1000);
  }

  function task3(callback) {
    setTimeout(() => {
      console.log("Task 3 completed");
      callback();
    }, 1000);
  }

  // Callback hell
  task1(() => {
    task2(() => {
      task3(() => {
        console.log("All tasks completed");
      });
    });
  });

  // Outputs:
  // (after 1 second) Task 1 completed
  // (after 2 seconds) Task 2 completed
  // (after 3 seconds) Task 3 completed
  // All tasks completed

  // CODE IN THE OPEN LINES ABOVE
  /*
Explanation:

Nesting callbacks leads to code that's hard to read and maintain, known as "callback hell" or the "pyramid of doom".
Each task waits for the previous one to complete before starting.
  */
}

function exercise_05() {
  /* 
   
   Exercise 5: Creating and Using Promises
Problem:

Convert the readFile function from Exercise 3 into a function that returns a Promise instead of using callbacks.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (filename === "data.txt") {
          resolve("File content");
        } else {
          reject(new Error("File not found"));
        }
      }, 1000);
    });
  }

  readFilePromise("data.txt")
    .then((content) => {
      console.log(content);
    })
    .catch((err) => {
      console.error(err.message);
    });

  // Outputs after 1 second: File content

  readFilePromise("missing.txt")
    .then((content) => {
      console.log(content);
    })
    .catch((err) => {
      console.error(err.message);
    });

  // Outputs after 1 second: File not found

  // CODE IN THE OPEN LINES ABOVE
  /*
Explanation:

Promises provide a cleaner way to handle asynchronous operations compared to callbacks.
resolve and reject are used to handle success and error cases.
  */
}

function exercise_06() {
  /* 
   
    Exercise 6
    
    Exercise 6: Chaining Promises
Problem:

Create three functions task1, task2, and task3, each returning a Promise that resolves after 1 second. Chain these promises so that they execute sequentially.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function task1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 1 completed");
        resolve();
      }, 1000);
    });
  }

  function task2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 2 completed");
        resolve();
      }, 1000);
    });
  }

  function task3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 3 completed");
        resolve();
      }, 1000);
    });
  }

  task1()
    .then(task2)
    .then(task3)
    .then(() => {
      console.log("All tasks completed");
    });

  // Outputs:
  // (after 1 second) Task 1 completed
  // (after 2 seconds) Task 2 completed
  // (after 3 seconds) Task 3 completed
  // All tasks completed

  /*
Explanation:

Chaining .then() allows for sequential execution of asynchronous tasks.
Each function returns a Promise, making them chainable.
  */
  // CODE IN THE OPEN LINES ABOVE
}

async function exercise_07() {
  /* 
   
    Exercise 7: Error Handling in Promise Chains
Problem:

Modify task2 from Exercise 6 to reject the promise with an error message 'Task 2 failed'. Handle the error in the promise chain.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function task1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 1 completed");
        resolve();
      }, 1000);
    });
  }

  function task2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task 2 failed");
        reject(new Error("Task 2 failed"));
      }, 1000);
    });
  }

  function task3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 3 completed");
        resolve();
      }, 1000);
    });
  }

  task1()
    .then(task2)
    .then(task3)
    .then(() => {
      console.log("All tasks completed");
    })
    .catch((err) => {
      console.error("Error:", err.message);
    });

  // Outputs:
  // (after 1 second) Task 1 completed
  // (after 2 seconds) Task 2 failed
  // Error: Task 2 failed

  // CODE IN THE OPEN LINES ABOVE
  /*
Explanation:

The reject function is used to indicate an error.
The .catch() method handles errors in the promise chain.
  */
}

async function exercise_08() {
  /* 
   
    Exercise 8: Using .then(), .catch(), and .finally()
Problem:

Add a .finally() block to the promise chain in Exercise 7 that logs 'Process finished' regardless of success or failure.
  
  */
  // CODE IN THE OPEN LINES BELOW
  task1()
    .then(task2)
    .then(task3)
    .then(() => {
      console.log("All tasks completed");
    })
    .catch((err) => {
      console.error("Error:", err.message);
    })
    .finally(() => {
      console.log("Process finished");
    });

  // Outputs:
  // (after 1 second) Task 1 completed
  // (after 2 seconds) Task 2 failed
  // Error: Task 2 failed
  // Process finished
  /*
Explanation:

.finally() is executed after the promise is settled, regardless of the outcome.
Useful for cleanup operations or final logging.
*/
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_09() {
  /* 
   
    Exercise 9: Simplifying Asynchronous Code with Async/Await
Problem:

Rewrite the promise chain from Exercise 6 using async/await syntax.
  
  */
  // CODE IN THE OPEN LINES BELOW
  async function runTasks() {
    try {
      await task1();
      await task2();
      await task3();
      console.log("All tasks completed");
    } catch (err) {
      console.error("Error:", err.message);
    }
  }

  runTasks();

  // Outputs:
  // (after 1 second) Task 1 completed
  // (after 2 seconds) Task 2 completed
  // (after 3 seconds) Task 3 completed
  // All tasks completed
  /*
Explanation:

The async function allows the use of await to pause execution until the promise resolves.
Error handling is done using try-catch.
  */
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_10() {
  /* 
   
    Exercise 10: Error Handling with Async/Await
Problem:

Use the modified task2 from Exercise 7 (which rejects) and handle the error using try-catch in an async function.
  
  */
  // CODE IN THE OPEN LINES BELOW
  async function runTasks() {
    try {
      await task1();
      await task2(); // This will throw an error
      await task3();
      console.log("All tasks completed");
    } catch (err) {
      console.error("Error:", err.message);
    } finally {
      console.log("Process finished");
    }
  }

  runTasks();

  // Outputs:
  // (after 1 second) Task 1 completed
  // (after 2 seconds) Task 2 failed
  // Error: Task 2 failed
  // Process finished

  // CODE IN THE OPEN LINES ABOVE
  /*
Explanation:

Errors thrown by await are caught in the catch block.
finally can be used similarly to .finally() in promises.
  */
}

function exercise_11() {
  /* 
   
    Exercise 12: Using try-catch for Synchronous and Asynchronous Code
Problem:

Write a function that synchronously throws an error if a provided number is negative. Also, write an async function that fetches data and throws an error if the response is not ok. Use try-catch to handle both cases.
    
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  function checkPositiveNumber(number) {
    if (number < 0) {
      throw new Error("Number must be positive");
    }
    return number;
  }

  async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }

  try {
    checkPositiveNumber(-5);
  } catch (err) {
    console.error("Synchronous error:", err.message);
  }

  (async () => {
    try {
      const data = await fetchData("https://invalid.url");
      console.log(data);
    } catch (err) {
      console.error("Asynchronous error:", err.message);
    }
  })();

  // Outputs:
  // Synchronous error: Number must be positive
  // Asynchronous error: request to https://invalid.url/ failed, reason: getaddrinfo ENOTFOUND invalid.url

  /*
Explanation:

Errors in synchronous code are caught in the try-catch block.
Errors in asynchronous code using async/await are also caught in try-catch.
  */
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_12() {
  /* 
   
Exercise 13: Throwing Custom Errors
Problem:

Create a custom error class ValidationError. Modify the checkPositiveNumber function to throw a ValidationError when the number is negative. Handle the error appropriately.
  
  */
  // CODE IN THE OPEN LINES BELOW

  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

  function checkPositiveNumber(number) {
    if (number < 0) {
      throw new ValidationError("Number must be positive");
    }
    return number;
  }

  try {
    checkPositiveNumber(-5);
  } catch (err) {
    if (err instanceof ValidationError) {
      console.error("Validation Error:", err.message);
    } else {
      console.error("Error:", err.message);
    }
  }

  // Outputs:
  // Validation Error: Number must be positive

  /*
Explanation:

Custom errors provide more context and can be handled differently.
The instanceof operator checks the error type.
*/
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_13() {
  /* 
   
    Exercise 14: Using the Callback Version of Node.js File System API
Problem:

Use the Node.js fs module to read the contents of a file example.txt using the callback-based fs.readFile method. Handle errors appropriately.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const fs = require("fs");

  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err.message);
    } else {
      console.log("File contents:", data);
    }
  });

  // Outputs the contents of example.txt or an error message
  /*
Explanation:

fs.readFile is asynchronous and uses a callback.
The callback handles both error and success cases.
*/
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_14() {
  /* 
   
    Exercise 15: Using the Promise-Based Version of Node.js File System API
Problem:

Use the fs.promises API to read the contents of example.txt using async/await. Handle any errors that may occur.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const fs = require("fs").promises;

  (async () => {
    try {
      const data = await fs.readFile("example.txt", "utf8");
      console.log("File contents:", data);
    } catch (err) {
      console.error("Error reading file:", err.message);
    }
  })();

  // Outputs the contents of example.txt or an error message
  /*
Explanation:

fs.promises provides promise-based versions of fs methods.
async/await is used for cleaner asynchronous code.
  */
  // CODE IN THE OPEN LINES ABOVE
}

async function exercise_15() {
  /* 
   
    Exercise 16: Reading and Writing Files Asynchronously with Error Handling
Problem:

Write a function copyFile that reads source.txt and writes its content to destination.txt using promises and async/await. Include proper error handling.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const fs = require("fs").promises;

  async function copyFile(source, destination) {
    try {
      const data = await fs.readFile(source, "utf8");
      await fs.writeFile(destination, data, "utf8");
      console.log(`Copied content from ${source} to ${destination}`);
    } catch (err) {
      console.error("Error:", err.message);
    }
  }

  copyFile("source.txt", "destination.txt");

  // Outputs success message or error
  /*
Explanation:

The function reads the source file and writes to the destination.
Errors are caught in the try-catch block.

  */
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
