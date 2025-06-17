/*
===============================
  🎵 Listen Tracker Script
  Author: Jeff
  Description: Increments a counter and shows
  a message when ready to sing
===============================
*/
// set up button
const counterButton = document.getElementById("counterButton");
const counter = document.getElementById("counter");

// form
const form = document.getElementById("nameSong");
const songInput = document.getElementById("song");

// text updates
const readyNotice = document.getElementById("readyNotice");
const currentSong = document.getElementById("currentSong");

// button functionality
let count = 0;

counterButton.addEventListener("click", () => {
    count++;
    counter.textContent = count;

    if (count >= 21) {
        readyNotice.textContent = "Ready to Sing!";
    }
});

// form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const song = songInput.value;
    currentSong.textContent = song;

    //reset input box
    songInput.value = "";
});
