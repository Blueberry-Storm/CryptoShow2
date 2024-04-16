document.addEventListener('DOMContentLoaded', function() {
    const profilePicInput = document.getElementById('profilePicture');
    const profilePicPreview = document.getElementById('profilePicPreview');

    profilePicInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePicPreview.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    const form = document.getElementById('profileForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add AJAX call to update profile information on the server
        alert('Profile updated successfully!');
    });
});
