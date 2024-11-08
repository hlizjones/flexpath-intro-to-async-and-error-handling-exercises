function exercise_04() {
  /* 
   
    Exercise 4: Understanding Callback Hell
    Problem:

    Demonstrate "callback hell" by writing nested callbacks to perform 
    three asynchronous tasks sequentially: 
    task1, task2, and task3, each taking 1 second to complete.
  
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
    Answer Explanation:

    Nesting callbacks leads to code that's hard to read and 
    maintain, known as "callback hell" or the "pyramid of doom".
    Each task waits for the previous one to complete before starting.
  */
}
