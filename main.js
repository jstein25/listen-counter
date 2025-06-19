/*
===============================
  🎵 Listen Tracker Script
  Author: Jeff
  Description: Displays listens
  for recent songs.
===============================
*/
import { plus, minus, readyString } from "./modules/buttons.js";
import { storeSong, setSong, getSong } from "./modules/song-storage.js";
import { loadTable } from "./modules/table.js";

const plusButton = document.querySelector("#plusButton");
const minusButton = document.querySelector("#minusButton");
const counter = document.querySelector("#counter");
const form = document.querySelector("form");
const songInput = document.querySelector("#song");
const readyNotice = document.querySelector("#readyNotice");
const currentSong = document.querySelector("#currentSong");
const tblBody = document.querySelector("tbody");

// update counters and store song
plusButton.addEventListener("click", () => {
    counter.textContent = plus();
    readyNotice.textContent = readyString();
    storeSong();
});
minusButton.addEventListener("click", () => {
    counter.textContent = minus();
    readyNotice.textContent = readyString();
    storeSong();
});

// song form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    setSong(songInput.value);
    currentSong.textContent = "Current Song: " + getSong();
    storeSong();
    tblBody.innerHTML = loadTable();

    // reset input box
    songInput.value = "";
});

//populate table body upon page load (3 rows)
tblBody.innerHTML = loadTable();
