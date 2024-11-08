function exercise_06() {
  /* 
    
    Exercise 6: Chaining Promises
    
    Problem:

    Create three functions task1, task2, and task3, 
    each returning a Promise that resolves after 1 second. 
    Chain these promises so that they execute sequentially.
    
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

  // CODE IN THE OPEN LINES ABOVE
  /*
    Answer Explanation:

    Chaining .then() allows for sequential execution of asynchronous tasks.
    Each function returns a Promise, making them chainable.
  */
}
