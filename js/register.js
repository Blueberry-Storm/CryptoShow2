document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = registerForm.elements['username'].value;
        const email = registerForm.elements['email'].value;
        const password = registerForm.elements['password'].value;
        const confirmPassword = registerForm.elements['confirmPassword'].value;

        if (!username || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Simulate registration process (to be replaced with actual API calls later)
        alert('Registration successful! Redirecting to login page...');
        window.location.href = 'login.html'; // Redirect to login page on success
    });
});
