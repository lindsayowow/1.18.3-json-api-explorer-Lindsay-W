// Wait for the page to load
window.addEventListener("load", function () {
   // Make the GET request   

const divList = document.getElementById("postList");

fetch("https://jsonplaceholder.typicode.com/posts")
       .then(function (response) {
           // Convert the response to JSON
           return response.json();
      })
       .then(function (json) {
           console.log(json); // Log the JSON data to console, next line adds it to the html
           divList.innerHTML = `  
    <ul>
        <li>Title: ${json.title}</li>
        <li>Body: ${json.body}</li>
    </ul>
`;
       })
       .catch(function (error) {
           console.error("Error fetching the data:", error);
       });
});


// Add HTML that includes the JSON data
