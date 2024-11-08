function exercise_05() {
  /* 
   
    Exercise 5: Creating and Using Promises
    
    Problem:

    Convert the 'readFile' function from Exercise 3 into a function 
    that returns a Promise instead of using callbacks.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (filename === "data.txt") {
          resolve("File content");
        } else {
          reject(new Error("File not found"));
        }
      }, 1000);
    });
  }

  readFilePromise("data.txt")
    .then((content) => {
      console.log(content);
    })
    .catch((err) => {
      console.error(err.message);
    });

  // Outputs after 1 second: File content

  readFilePromise("missing.txt")
    .then((content) => {
      console.log(content);
    })
    .catch((err) => {
      console.error(err.message);
    });

  // Outputs after 1 second: File not found

  // CODE IN THE OPEN LINES ABOVE
  /*
    Answer Explanation:

    Promises provide a cleaner way to handle asynchronous operations compared to callbacks.
    resolve and reject are used to handle success and error cases.
  */
}
