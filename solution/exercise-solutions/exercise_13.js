function exercise_13() {
  /* 
   
    Exercise 13: Using the Callback Version of Node.js File System API
    
    Problem:

    Use the Node.js 'fs' module to read the contents of a file 
    'exercise_example.txt' using the callback-based fs.readFile method. 
    Handle errors appropriately.

    The fs module has already been imported for you at the top of this 
    exercises.js file, so you don't need to do that.
  
  */
  // CODE IN THE OPEN LINES BELOW

  fs.readFile("./exercise_example.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err.message);
    } else {
      console.log("File contents:", data);
    }
  });

  // Outputs the contents of exercise_example.txt or an error message
  // CODE IN THE OPEN LINES ABOVE

  /*
    Answer Explanation:

    fs.readFile is asynchronous and uses a callback.
    The callback handles both error and success cases.
  */
}
