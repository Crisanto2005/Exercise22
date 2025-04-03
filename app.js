let submitButton = document.getElementById('submitSearch');
let searchInput = document.getElementById('searchWord');
let imageElement = document.querySelector('#imageContainer img');


submitButton.addEventListener("click", sb);

function sb() {
    let searchTerm = searchInput.value;

    const APIKEY = 'qyZNjmxl7KCw4cY9fL86j7AQWzYeRgZx'; 
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=${APIKEY}&s=${searchTerm}`;

    searchInput.value = "";  
  
    fetch(url)
    .then(response => response.json())  // Convert the response to JSON
    .then(data => {
      let gifUrl = data.data.images.original.url;
      imageElement.src = gifUrl;  // Set the image element to display the GIF
    })
    .catch(error => {
      console.error("Error fetching the GIF:", error);
    });
}

  