// Fetch GitHub data using API
fetch('https://api.github.com/users/wazedkhan')
    .then(response => response.json()) // Parse the JSON from the response
    .then(data => {
        // Insert data into the HTML

        // Set the avatar image
        document.getElementById('avatar').src = data.avatar_url;

        // Set the name
        document.getElementById('name').textContent = data.name || 'No Name Provided';

        // Set the bio
        document.getElementById('bio').textContent = data.bio || 'No bio available';

        // Set public repos count
        document.getElementById('public-repos').textContent = data.public_repos;

        // Set followers and following count
        document.getElementById('followers').textContent = data.followers;
        document.getElementById('following').textContent = data.following;

        // Set GitHub profile link
        document.getElementById('github-link').href = data.html_url;
    })
    .catch(error => {
        console.error('Error fetching GitHub data:', error);
    });
