/*
===============================
  Song Storage
  Author: Jeff
  Description: Handles local storage
  for listen counter program.
===============================
*/
import { getCount } from "./buttons.js";

let song = "";

function storeSong() {
    //store if current song is filled
    if (song) {
        localStorage.setItem(song, getCount());
    }
}

function setSong(value) {
    song = value;
}

function getSong() {
    return song;
}

//return js object with songs and number of listens
function scanStorage() {
    const localStorageObject = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        localStorageObject[key] = localStorage.getItem(key);
    }
    return localStorageObject;
}

export { storeSong, setSong, getSong, scanStorage };
