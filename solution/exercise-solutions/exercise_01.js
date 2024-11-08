function exercise_01() {
  /* 
   
    Exercise 1: Understanding Synchronous vs. Asynchronous Operations
    
    Problem:

    Explain the difference between synchronous and asynchronous operations 
    in JavaScript with examples. 
    Write a synchronous function that logs numbers from 1 to 5, and 
    an asynchronous function that does the same but 
    with a delay of 1 second between each number.
  
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
    Answer Explanation:

    Synchronous operations execute code sequentially; 
      Each operation must complete before the next one starts.

    Asynchronous operations allow the program to continue executing 
      without waiting for an operation to finish.
      In the asynchronous function, setTimeout is used 
      to introduce a delay, simulating asynchronous behavior.
*/

  // CODE IN THE OPEN LINES ABOVE
}
