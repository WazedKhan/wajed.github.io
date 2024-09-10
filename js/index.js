fetch('https://api.github.com/users/wazedkhan')
    .then(response => response.json())
    .then(data=>{
        document.getElementById("profile-pic").src = data.avatar_url;
        document.getElementById("profile-bio").textContent = data.bio || ""
    })
    .catch(error=> {
        console.log('Error fetching GitHub data:', error);
    });