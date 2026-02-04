const divList = document.getElementById("postList"); //retrieving elements to manipulate the DOM
const divError = document.getElementById("formError"); 
const divSuccess = document.getElementById("formSuccess");
const fetchGetButton = document.getElementById("fetchButton");
const sendTitle = document.getElementById("titleInput");
const sendBody = document.getElementById("bodyInput");
const divPost = document.getElementById("postForm");

//Event listener to post the data to the server.
divPost.addEventListener("submit", function (event) {
    event.preventDefault();
    let titleText = sendTitle.value;
    let bodyText = sendBody.value;
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",                                  //sending data not receiving
        headers: { "Content-Type": "application/json" }, // converts to JSON
        body: JSON.stringify({   //puts form contents back into object format
            title: titleText,
            body: bodyText
        })
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log("POST response:", json);
            divSuccess.innerHTML = "Post submitted successfully!";
            sendTitle.value = "";
            sendBody.value = "";
        })
        .catch(function (error) {
            console.error("Error posting data:", error);
            divError.innerHTML = "There was an error submitting your post.";
        });
});

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

