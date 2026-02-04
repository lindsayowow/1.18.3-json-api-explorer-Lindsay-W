const divList = document.getElementById("postList"); // I brought most all elements in because I'm not sure which I will need
const divError = document.getElementById("formError"); //I can't seem to get this div to work in the catch phrase. left it in in case I can fix it later
const divSuccess = document.getElementById("formSuccess");
const divErrorMessage = document.getElementById("errorMessage");
const fetchGetButton = document.getElementById("fetchButton");
const sendTitle = document.getElementById("titleInput");
const sendBody = document.getElementById("bodyInput");
const divPost = document.getElementById("postForm");

//Event listener to post the data to the server.
divPost.addEventListener("submit", function () {})


    // Make the GET request from the site to get a title/body
    fetchGetButton.addEventListener("click", function () {
        let selectBookNumber = Math.floor(Math.random() * 100); // this gets a random index number from the object list
        divList.innerHTML = `Loading...`
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(function (response) {
                // Convert the response to JSON
                return response.json();
            })
            .then(function (json) {
                console.log(json); // Log the JSON data to console, next line adds it to the html
                divList.innerHTML = `  
    <ul>
        <li>Title: ${json[selectBookNumber].title}</li>
        <li>Body: ${json[selectBookNumber].body}</li>
    </ul>
`;
            })
            .catch(function (error) {
                console.error("Error fetching the data:", error);
                divList.innerHTML = `Error fetching the data.`
            });
    });

