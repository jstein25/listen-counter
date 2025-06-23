/*
===============================
  🎵 Listen Tracker Script
  Author: Jeff
  Description: Displays listens
  for recent songs.
===============================
*/
import {
    plus,
    minus,
    getCount,
    setCount,
    readyString,
} from "./modules/buttons.js";
import {
    setSong,
    getSong,
    storeSong,
    getListensFromStorage,
    setListens,
} from "./modules/song-storage.js";
import { loadTableBody } from "./modules/table.js";

const plusButton = document.querySelector("#plusButton");
const minusButton = document.querySelector("#minusButton");
const counter = document.querySelector("#counter");
const form = document.querySelector("form");
const songInput = document.querySelector("#song");
const readyNotice = document.querySelector("#readyNotice");
const currentSong = document.querySelector("#currentSong");
const tbody = document.querySelector("tbody");

// update counters and store song
plusButton.addEventListener("click", () => {
    // only do if current song is picked
    if (getSong()) {
        counter.textContent = plus();
        readyNotice.textContent = readyString();
        setListens(getCount());
        tbody.innerHTML = loadTableBody();
    }
});
minusButton.addEventListener("click", () => {
    // ""
    if (getSong()) {
        counter.textContent = minus();
        readyNotice.textContent = readyString();
        setListens(getCount());
        tbody.innerHTML = loadTableBody();
    }
});

// song form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // sets current song
    setSong(songInput.value);
    setCount(getListensFromStorage());
    storeSong();

    // upon adding a song, update UI
    currentSong.textContent = "Current Song: " + getSong();
    counter.textContent = getCount();
    tbody.innerHTML = loadTableBody();

    // reset input box
    songInput.value = "";
});

//populate table body upon page load (3 rows)
tbody.innerHTML = loadTableBody();