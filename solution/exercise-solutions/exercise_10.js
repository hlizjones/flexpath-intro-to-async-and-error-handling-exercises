async function exercise_10() {
  /* 
   
    Exercise 10: Error Handling with Async/Await
    
    Problem:

    Copy the code from Exercise 9 and paste it below.
    But, instead of that task2 function, use the modified task2 from Exercise 7 
    (which rejects) and handle the error in your async/await promise chain.
    
    Add a `finally` block to the try-catch block that 
    logs 'Process finished' regardless of success or failure.
  
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
    Answer Explanation:

    Errors thrown by await are caught in the catch block.
    `finally` can be used similarly to .finally() in promises.
  */
}
