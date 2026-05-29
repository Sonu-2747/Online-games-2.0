// Log Out Functionality (example)
const logoutButton = document.querySelector('.logout-btn');

logoutButton.addEventListener('click', () => {
    // Add logout functionality (e.g., clear session, redirect)
    alert('You have been logged out.');
    window.location.href = 'login.html'; // Redirect to login page
});

// Additional login button actions (example)
const googleLoginBtn = document.querySelector('.google-login');
googleLoginBtn.addEventListener('click', () => {
    // Google login logic
    alert('Google Login clicked');
});

const facebookLoginBtn = document.querySelector('.facebook-login');
facebookLoginBtn.addEventListener('click', () => {
    // Facebook login logic
    alert('Facebook Login clicked');
});

const twitterLoginBtn = document.querySelector('.twitter-login');
twitterLoginBtn.addEventListener('click', () => {
    // Twitter login logic
    alert('Twitter Login clicked');
});
