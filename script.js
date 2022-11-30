const image = document.querySelector('img'),
      title = document.querySelector('#title'),
      artist = document.querySelector('#artist'),
      music = document.querySelector('audio'),
      prevBtn = document.querySelector('#prev'),
      playBtn = document.querySelector('#play'),
      nextBtn = document.querySelector('#next');

// Music
const songs = [
    {
        name: "jacinto-1",
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto Design',
    },
    {
        name: "jacinto-2",
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacinto Design',
    },
    {
        name: "jacinto-3",
        displayName: 'Goodnight, Disco Queen',
        artist: 'Jacinto Design',
    },
    {
        name: "metric-1",
        displayName: 'Front Row (Remix)',
        artist: 'Metric/Jacinto Design',
    }
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

// Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

// Play or pause event listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update Dom
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Next Song
function nextSong() {
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex++;
    }

    loadSong(songs[songIndex]);
    playSong();
}

// Previous Song
function prevSong() {
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex--;
    }

    loadSong(songs[songIndex]);
    playSong();
}

// On load - Select first Song
loadSong(songs[songIndex]);

// Event Listeners

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);