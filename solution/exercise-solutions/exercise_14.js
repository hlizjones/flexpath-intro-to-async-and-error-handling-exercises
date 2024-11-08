function exercise_14() {
  /* 
   
    Exercise 14: Using the Promise-Based Version of Node.js File System API

    Problem:

    Use the fs.promises API to read the contents of exercise_example.txt 
    using async/await. Handle any errors that may occur.

    NOTE - We have already imported the fs.promises library at the top
    of this exercises.js file and assigned it to the Global variable 
    `fsPromises`. Please use this variable in your code below.
  
  */
  // CODE IN THE OPEN LINES BELOW
  (async () => {
    try {
      const data = await fsPromises.readFile("exercise_example.txt", "utf8");
      console.log("File contents:", data);
    } catch (err) {
      console.error("Error reading file:", err.message);
    }
  })();

  // Outputs the contents of example.txt or an error message
  /*
    Answer Explanation:

    fs.promises provides promise-based versions of fs methods.
    async/await is used for cleaner asynchronous code.
  */
  // CODE IN THE OPEN LINES ABOVE
}
