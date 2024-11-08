function exercise_19() {
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  /* 
   
    Exercise 19
    
    Using `Promise.race`: 
		
		Using Promise.race, log the result of the first promise to out of an array
    of them.

    We have created a Promise based `sleep` function above that takes an integer
    for the number of milliseconds to wait before resolving the promise.

    You can use it below. Use 1000 milliseconds for one of the `sleep` calls
    and 2000 milliseconds for the other.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const promise1 = sleep(2000).then(() => "First Promise");
  const promise2 = sleep(1000).then(() => "Second Promise");
  Promise.race([promise1, promise2]).then((result) =>
    console.log("First to finish:", result)
  );
  // CODE IN THE OPEN LINES ABOVE
}
