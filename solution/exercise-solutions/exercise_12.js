function exercise_12() {
  /* 
   
    Exercise 12: Throwing Custom Errors
    
    Problem:

    Create a custom error class ValidationError. 
    Paste the 'checkPositiveNumber' function below and modify it to throw a 
    ValidationError when the number is negative. 
    Handle the error appropriately.
      
  */
  // CODE IN THE OPEN LINES BELOW

  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

  function checkPositiveNumber(number) {
    if (number < 0) {
      throw new ValidationError("Number must be positive");
    }
    return number;
  }

  try {
    checkPositiveNumber(-5);
  } catch (err) {
    if (err instanceof ValidationError) {
      console.error("Validation Error:", err.message);
    } else {
      console.error("Error:", err.message);
    }
  }

  // Outputs:
  // Validation Error: Number must be positive

  // CODE IN THE OPEN LINES ABOVE
  /*
    Answer Explanation:

    Custom errors provide more context and can be handled differently.
    The instanceof operator checks the error type.
*/
}
