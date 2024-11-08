async function exercise_07() {
  /* 
   
    Exercise 7: Error Handling in Promise Chains
    
    Problem:

    Modify task2 from Exercise 6 to reject the promise with 
    an error message 'Task 2 failed'. Handle the error in the promise chain.
  
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
    Answer Explanation:

    The reject function is used to indicate an error.
    The .catch() method handles errors in the promise chain.
  */
}
