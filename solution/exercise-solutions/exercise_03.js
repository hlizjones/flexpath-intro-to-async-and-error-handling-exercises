function exercise_03() {
  /* 
   
    Exercise 3: Working with Callbacks
    
    Problem:

    Write a function 'readFile' that simulates reading a file asynchronously. 
    It should accept a filename and a callback function. 
    If the filename is 'data.txt', it should return 'File content' after 1 second.
    Otherwise, it should return an error.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function readFile(filename, callback) {
    setTimeout(() => {
      if (filename === "data.txt") {
        callback(null, "File content");
      } else {
        callback(new Error("File not found"));
      }
    }, 1000);
  }

  readFile("data.txt", (err, content) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(content);
    }
  });

  // Outputs after 1 second: File content

  readFile("missing.txt", (err, content) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(content);
    }
  });

  // Outputs after 1 second: File not found

  // CODE IN THE OPEN LINES ABOVE

  /*
    Answer Explanation:

    The readFile function uses a callback to handle both success and error cases.
    Error-first callbacks are a common pattern in Node.js and JavaScript.
  */
}
