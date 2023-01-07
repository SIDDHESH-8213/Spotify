console.log("Hello world");

let songIndex = 0;
let audioElement = new Audio("Ghungroo%20-%20War%20320%20Kbps.mp3");
let masterplay = document.getElementById("masterPlay");
let progressBar = document.getElementById("myprogressbar");
let gif = document.getElementById("GIF");
let mastersongname = document.getElementById("mastersongname");
let songItems = Array.from(document.getElementsByClassName("song"));

let songs = [
    { songname: "All Rise", filepath: "AllRise.mp3" },
    { songname: "One Love", filepath: "OneLove.mp3" },
    { songname: "Hymm For the Weekend", filepath: "HymnForTheWeekend.mp3" },
    { songname: "Paradise", filepath: "Paradise.mp3" },
    { songname: "Pasoori", filepath: "Pasoori.mp3" },
    { songname: "Ghungroo", filepath: "Ghungroo%20-%20War%20320%20Kbps.mp3" },
    { songname: "Summer of 69", filepath: "Summerof69.mp3" },

]

songItems.forEach((element, i) => {
    element.getElementsByClassName("song_name")[0].innerText = songs[i].songname;
});

masterplay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        gif.style.opacity = 1;
        console.log("If clicked");
    }
    else {
        audioElement.pause();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
        gif.style.opacity = 0;
        console.log("else clicked");
    }
})

audioElement.addEventListener("timeupdate", () => {
    let progress = parseInt(((audioElement.currentTime) / (audioElement.duration)) * 100);
    progressBar.value = progress;

})

progressBar.addEventListener("change", () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
})

const makeallplays = () => {
    Array.from(document.getElementsByClassName("new")).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName("play")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src = songs[songIndex].filepath;
        mastersongname.innerText = songs[songIndex].songname;
        console.log(mastersongname.innerText);
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove("fa-play");
        masterplay.classList.add('fa-pause');
    })
})

document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 6) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filepath;
    mastersongname.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove("fa-play");
    masterplay.classList.add('fa-pause');

})

document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 6;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filepath;
    mastersongname.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    makeallplays();
    audioElement.play();
   
    gif.style.opacity = 1;
    masterplay.classList.remove("fa-play");
    masterplay.classList.add('fa-pause');
})


