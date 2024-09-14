fetch('https://api.github.com/users/wazedkhan')
    .then(response => response.json())
    .then(data=>{
        document.getElementById("profile-pic").src = data.avatar_url;
        document.getElementById("profile-bio").textContent = data.bio || ""
    })
    .catch(error=> {
        console.log('Error fetching GitHub data:', error);
    });

// This function will be called every 2 minutes
function requestEveryTwoMinutes() {
    fetch('https://wajedkhan.onrender.com/')
        .then(response => response.json())
        .then(data => {
            console.log('Data from another API:', data);
        })
        .catch(error => {
            console.log('Error fetching another API:', error);
        });
}


// Set interval for the second function to run every 2 minutes
setInterval(requestEveryTwoMinutes, 120000);