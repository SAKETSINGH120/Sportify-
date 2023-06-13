console.log("welcome to sportify");

//initialize
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.querySelector('#masterPlay');
let myProgressBar = document.getElementById('progressbar');
let gifspan = document.querySelector('.gif');
let songset = Array.from(document.querySelectorAll('.songItem'))
let masterclass = document.getElementsByClassName('masterclass');



let songs = [
    { songname: "chal vaha jate hai", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songname: "chal vaha jate hai", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songname: "chal vaha jate hai", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songname: "chal vaha jate hai", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songname: "chal vaha jate hai", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songname: "chal vaha jate hai", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songname: "chal vaha jate hai", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
];

songset.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songNAme")[0].innerText = songs[i].songname;
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gifspan.style.opacity = 1;

    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gifspan.style.opacity = 0;

    }
})


audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate')
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})


myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeallsongplay = () => {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")
    })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.addEventListener("click", (e) => {
            makeallsongplay();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause")
            audioElement.src = `songs/${songIndex+1}.mp3`
            masterclass.innerText = songs[songIndex].songname;
            audioElement.currentTime = 0;
            audioElement.play();
            gifspan.style.opacity = 1;
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-circle-pause")

        })
    })
    // document.getElementById("previous").addEventListener("click ", () => {
    //         if (songIndex <= 0) {
    //             songIndex = 0;
    //         } else {
    //             songIndex -= 1;
    //         }
    //         audioElement.src = `songs/${songIndex+1}.mp3`
    //         masterclass.innerText = songs[songIndex].songname;
    //         audioElement.currentTime = 0;
    //         audioElement.play();
    //         masterPlay.classList.remove("fa-circle-play");
    //         masterPlay.classList.add("fa-circle-pause")


//     })
// document.getElementById("next").addEventListener('click ', () => {
//         if (songIndex >= 9) {
//             songIndex = 0;
//         } else {
//             songIndex += 1;
//         }
//         audioElement.src = `songs/${songIndex+1}.mp3`;
//         masterclass.innerText = songs[songIndex].songname;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay.classList.remove("fa-circle-play");
//         masterPlay.classList.add("fa-circle-pause")

//     })
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterclass.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gifspan.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterclass.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gifspan.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})