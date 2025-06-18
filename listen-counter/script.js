/*
===============================
  🎵 Listen Tracker Script
  Author: Jeff
  Description: Increments a counter and shows
  a message when ready to sing
===============================
*/
// buttons
const plusButton = document.querySelector("#plusButton");
const minusButton = document.querySelector("#minusButton");
const counter = document.querySelector("#counter");

// form
const form = document.querySelector("#nameSong");
const songInput = document.querySelector("#song");

// text updates
const readyNotice = document.querySelector("#readyNotice");
const currentSong = document.querySelector("#currentSong");

// button functionality
let count = 0;
plusButton.addEventListener("click", () => {
    count++;
    counter.textContent = count;

    if (count >= 2) {
        readyNotice.textContent = "Ready to Sing!";
    }
});
minusButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counter.textContent = count;
    }

    if (count < 21) {
        readyNotice.textContent = "";
    }
});

// song form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const song = songInput.value;
    currentSong.textContent = "Current Song: " + song;

    //reset input box
    songInput.value = "";
});
