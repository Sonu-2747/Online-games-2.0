// You can use this script to implement additional interactivity if needed
console.log("Navigation bar loaded successfully!");

// Future code can handle search bar suggestions, notifications, etc.

// Call to action button event listener for redirection or further action
document.getElementById('ctaButton').addEventListener('click', function() {
    alert('Redirecting to group creation page...');
    // Add your redirection logic here
});

// JavaScript for potential interactivity (optional)
document.querySelectorAll('.carousel-item').forEach((item) => {
    item.addEventListener('click', () => {
        alert('Redirecting to Group Details Page...');
        // Add redirection logic here
    });
});

// Filter button interaction (for future enhancement)
document.querySelectorAll('.category-button').forEach((button) => {
    button.addEventListener('click', () => {
        alert(`Filter by ${button.innerText} category`);
        // Add category filtering logic here
    });
});


document.querySelector('.search-button').addEventListener('click', () => {
    const searchQuery = document.querySelector('.search-input').value;
    alert(`Searching for: ${searchQuery}`);
    // Implement search functionality here
});


document.querySelectorAll('.discussion-card, .post-card').forEach((card) => {
    card.addEventListener('click', () => {
        alert(`Redirecting to the discussion or post...`);
        // Add redirection logic here
    });
});


const gameFilter = document.getElementById('filter-game');
const typeFilter = document.getElementById('filter-type');
const locationFilter = document.getElementById('filter-location');

gameFilter.addEventListener('change', filterEvents);
typeFilter.addEventListener('change', filterEvents);
locationFilter.addEventListener('change', filterEvents);

function filterEvents() {
    const selectedGame = gameFilter.value;
    const selectedType = typeFilter.value;
    const selectedLocation = locationFilter.value;

    alert(`Filtering by: Game = ${selectedGame}, Type = ${selectedType}, Location = ${selectedLocation}`);
    // Add logic to filter events based on the selected filters
}

// Optionally: you can fetch events dynamically from a database or API

// Filtering functionality (basic template)
const genreFilter = document.getElementById('filter-genre');
const regionFilter = document.getElementById('filter-region');

gameFilter.addEventListener('change', filterLeaderboards);
genreFilter.addEventListener('change', filterLeaderboards);
regionFilter.addEventListener('change', filterLeaderboards);

function filterLeaderboards() {
    const selectedGame = gameFilter.value;
    const selectedGenre = genreFilter.value;
    const selectedRegion = regionFilter.value;

    alert(`Filtering by: Game = ${selectedGame}, Genre = ${selectedGenre}, Region = ${selectedRegion}`);
}

// Like button functionality
const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
    button.addEventListener('click', function () {
        const activityCard = this.closest('.activity-card');
        const username = activityCard.querySelector('.username').textContent;
        alert(`You liked ${username}'s activity!`);
    });
});

// Comment button functionality
const commentButtons = document.querySelectorAll('.comment-button');

commentButtons.forEach(button => {
    button.addEventListener('click', function () {
        const activityCard = this.closest('.activity-card');
        const username = activityCard.querySelector('.username').textContent;
        const comment = prompt(`Comment on ${username}'s activity:`);
        if (comment) {
            alert(`Your comment on ${username}'s activity: "${comment}"`);
        }
    });
});
