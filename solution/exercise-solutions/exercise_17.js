function exercise_17() {
  const errorProneFunction = () => {
    if (Math.random() > 0.5) throw new Error("Random failure");
    console.log("Success!");
  };
  /* 
   
    Exercise 17
    
    Retry Logic: 

    Create a function named `retry` that takes a function to run and 
    the number of times it should retry it if it fails.

    Set a variable named `attempt` inside the retry function and initialize
    it to 0. Then, create a function inside the `retry` function named
    `execute`. 

    Use a try-catch block inside of `execute` to try to execute the function
    passed to `retry`. 

    Inside of the catch block, check to see if the current attempt number is 
    less than the 'retries' limit.

    If it is, increment 'attempt' by 1, log a message to the console saying you
    are retrying the function, and then run the `execute` function again.

    If attempt is greater than the retry limit, log an error to the console
    that says the function failed after the retry limit, and print the error 
    message. 

    Finally, we have defined an error prone function above 
    named `errorProneFunction`. Pass this to your `retry` function to test that
    it runs properly.

    Run this exercise multiple times to see the success and failure conditions
    your retry function should have.
  
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
  retry(errorProneFunction, 3);
  // CODE IN THE OPEN LINES ABOVE
}
