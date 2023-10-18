document.getElementsByClassName('date-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior (following the link)

    // Your Fetch request here
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            // Process the JSON data received from the server
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error(error);
        });
});