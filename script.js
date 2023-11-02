


// Function to open the login page
function openLoginPage() {
    window.location.href = 'login.html'; 
}
// script.js

// Function to validate the form
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username contains '@'
    if (!username.includes('@')) {
        alert('Username must contain "@" symbol.');
        return false; // Prevent form submission
    }

    // Check if the password contains at least one letter and one number
    if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(password)) {
        alert('Password must contain at least one letter and one number.');
        return false; // Prevent form submission
    }

    // Validation passed, allow form submission
    return true;
}

// JavaScript code to show and hide the pop-up

document.getElementById('contact-seller').addEventListener('click', function() {
    document.getElementById('contact-popup').style.display = 'block';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('contact-popup').style.display = 'none';
});


function goBack() {
    window.history.back(); // This will go back to the previous page in the browsing history.
}
