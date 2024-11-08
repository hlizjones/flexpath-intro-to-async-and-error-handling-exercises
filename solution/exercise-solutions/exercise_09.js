async function exercise_09() {
  /* 
   
    Exercise 9: Simplifying Asynchronous Code with Async/Await

    Problem:

    Copy the function definition code for task1, task2, and task3 from 
      Exercise 6 and paste it below.
    Rewrite the promise chain from Exercise 6 using async/await syntax.
  
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

  // CODE IN THE OPEN LINES ABOVE
  /*
    Answer Explanation:

    The async function allows the use of await to pause execution 
      until the promise resolves.
    Error handling is done using try-catch.
  */
}
