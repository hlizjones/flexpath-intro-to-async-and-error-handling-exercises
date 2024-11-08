async function exercise_11() {
  /* 
   
    Exercise 11: Using try-catch for Synchronous and Asynchronous Code
    
    Problem:

    Write a function that synchronously throws an error if a 
    provided number is negative. 
    Also, write an async function that fetches data and throws 
    an error if the response is not ok. Use try-catch to handle both cases.
  
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

  // CODE IN THE OPEN LINES ABOVE

  /*
    Answer Explanation:

    Errors in synchronous code are caught in the try-catch block.
    Errors in asynchronous code using async/await are also caught in try-catch.
  */
}
