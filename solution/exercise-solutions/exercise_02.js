function exercise_02() {
  /* 
   
    Exercise 2: Use Cases for Asynchronous Logic
    
    Problem:

    Write an asynchronous function 'fetchData' that simulates fetching 
    data from an API using setTimeout. 
    The function should accept a callback that processes the data 
    once it's "fetched". Simulate a delay of 2 seconds.
  */
  // CODE IN THE OPEN LINES BELOW

  function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
      const data = { id: 1, message: "Hello, world!" };
      callback(data);
    }, 2000);
  }

  fetchData((data) => {
    console.log("Data received:", data);
  });

  // Outputs:
  // Fetching data...
  // (after 2 seconds)
  // Data received: { id: 1, message: 'Hello, world!' }

  // CODE IN THE OPEN LINES ABOVE

  /*
    Answer Explanation:

    The fetchData function simulates an API call with a delay.
    A callback function is passed to process the data once it's available.
  */
}
