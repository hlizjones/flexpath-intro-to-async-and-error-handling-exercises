function exercise_20() {
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  const promise1 = sleep(2000).then(() => "First Promise");
  const promise2 = sleep(1000).then(() => "Second Promise");
  const promiseList = [promise1, promise2, Promise.reject("Error")];
  /* 
   
    Exercise 20
    
    Using `Promise.allSettled`
		
		Use Promise.allSettled to check when an array of promises settle.

    We have defined a `promiseList` for you to use above
  
  */
  // CODE IN THE OPEN LINES BELOW

  Promise.allSettled(promiseList).then((results) =>
    console.log("All Settled Results:", results)
  );
  // CODE IN THE OPEN LINES ABOVE
}
