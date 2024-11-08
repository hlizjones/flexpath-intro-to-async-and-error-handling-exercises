async function exercise_15() {
  /* 
   
    Exercise 15: Reading and Writing Files Asynchronously with Error Handling
    
    Problem:

    Write a function 'copyFile' that reads 'source.txt' and writes its 
    content to 'destination.txt' using promises and async/await. 
    Include proper error handling.

    NOTE - We have already imported the fs.promises library at the top
    of this exercises.js file and assigned it to the Global variable 
    `fsPromises`. Please use this variable in your code below.
  
  */
  // CODE IN THE OPEN LINES BELOW

  async function copyFile(source, destination) {
    try {
      const data = await fsPromises.readFile(source, "utf8");
      await fsPromises.writeFile(destination, data, "utf8");
      console.log(`Copied content from ${source} to ${destination}`);
    } catch (err) {
      console.error("Error:", err.message);
    }
  }

  copyFile("source.txt", "destination.txt");

  // Outputs success message or error
  // CODE IN THE OPEN LINES ABOVE
  /*
    Answer Explanation:

    The function reads the source file and writes to the destination.
    Errors are caught in the try-catch block.

  */
}
