function exercise_16() {
  /* 
   
    Exercise 16
    
    Fetch API: 
		
		Use the `fetch` API to make a GET request.

    Make this request to the following url:
    "https://jsonplaceholder.typicode.com/todos/1"
  
  */
  // CODE IN THE OPEN LINES BELOW
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log("Fetched data:", data))
    .catch((error) => console.error("Error:", error.message));
  // CODE IN THE OPEN LINES ABOVE
}
