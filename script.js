
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the sign-in button element
    var signInBtn = document.getElementById('signInBtn');

    // Add click event listener to the sign-in button
    signInBtn.addEventListener('click', function() {
        // Redirect to order.html
        window.location.href = 'main.html';
    });
});

