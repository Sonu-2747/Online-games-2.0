// Assume this function is called upon successful signup/login
function handleSuccessfulLogin(username) {
    // Update the login icon with username and avatar
    const userAvatar = document.getElementById('userAvatar');
    if (userAvatar) {
        userAvatar.src = 'login_icon.png'; // Replace with the actual avatar source
        userAvatar.alt = username; // Set alt text to username
    }

    const loginIcon = document.getElementById('loginIcon');
    if (loginIcon) {
        const loginLink = loginIcon.querySelector('a');
        if (loginLink) {
            loginLink.href = '#'; // Replace with the link for logged-in user's page
        }
    }
}
