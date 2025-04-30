document.getElementById('waitlistForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;

    // Replace YOUR_WEB_APP_URL with the URL of your deployed Google Apps Script Web App
    const googleScriptURL = 'https://script.google.com/macros/s/AKfycbw3u9q9HwUK85jhh8FD3qb2J8ArjXhnGHF2X845ilBGJ1Dy1CHOwziOSZVnbgJIqSGR/exec';

    fetch(googleScriptURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'email=' + encodeURIComponent(email)
    })
        .then(response => response.text())
        .then(message => {
            document.getElementById('message').textContent = 'Thank you! Your email has been added.';
            document.getElementById('email').value = ''; // Clear the input field
        })
        .catch(error => {
            document.getElementById('message').textContent = 'Oops! Something went wrong.';
            console.error('Error:', error);
        });
});
