function exercise_18() {
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  /* 
   
    Exercise 18
    
    Using `Promise.all`: 
		
		Make two promises run concurrently by using Promise.all.
    Once they are both finished, log their results to the console.

    We have created a Promise based `sleep` function above that takes an integer
    for the number of milliseconds to wait before resolving the promise.

    You can use it below. 1000 milliseconds equals 1 second.
  
  */
  // CODE IN THE OPEN LINES BELOW

  const promise1 = sleep(1000).then(() => "First Promise");
  const promise2 = sleep(1000).then(() => "Second Promise");
  Promise.all([promise1, promise2]).then((results) =>
    console.log("Results:", results)
  );
  // CODE IN THE OPEN LINES ABOVE
}
