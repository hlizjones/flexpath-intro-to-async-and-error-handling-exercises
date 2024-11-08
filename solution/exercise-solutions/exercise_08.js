async function exercise_08() {
  /* 
   
    Exercise 8: Using .then(), .catch(), and .finally()
    
    Problem:

    Copy your code from Exercise 7 and paste it below.
    Add a .finally() block to the promise chain from Exercise 7 that 
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

  // CODE IN THE OPEN LINES ABOVE
  /*
    Answer Explanation:

    .finally() is executed after the promise is settled, regardless of the outcome.
    Useful for cleanup operations or final logging.
  */
}
