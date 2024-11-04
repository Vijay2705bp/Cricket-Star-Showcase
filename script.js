function initMap() {
    const map = new google.maps.Map(document.getElementById('mapContainer'), {
        zoom: 2,
        center: { lat: 20, lng: 0 }, // Center of the map
    });

    // Add markers for each player's hometown or country
    const players = [
        { name: 'Player 1', location: { lat: 28.6139, lng: 77.2090 } }, // Example coordinates for Delhi
        { name: 'Player 2', location: { lat: 51.5074, lng: -0.1278 } }, // Example coordinates for London
        // Add more players as needed
    ];

    players.forEach(player => {
        new google.maps.Marker({
            position: player.location,
            map: map,
            title: player.name
        });
    });
}

document.getElementById('fanStoryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const playerName = document.getElementById('playerName').value;
    const story = document.getElementById('story').value;

    const storiesDiv = document.getElementById('fanStories');
    const newStory = document.createElement('p');
    newStory.innerText = `${playerName}: ${story}`;
    storiesDiv.appendChild(newStory);

    this.reset();
});

document.getElementById('voteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedPlayer = document.getElementById('greatestPlayer').value;
    alert(`You voted for: ${selectedPlayer}`);
});
