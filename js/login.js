document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = loginForm.elements['username'].value;
        const password = loginForm.elements['password'].value;

        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }

        // Simulate login process (to be replaced with actual API calls later)
        if (username === "admin" && password === "admin") {
            // This would be a successful login scenario
            window.location.href = 'events.html'; // Redirect to events page on success
        } else {
            alert('Invalid credentials. Please try again or register if you do not have an account.');
        }
    });
});
