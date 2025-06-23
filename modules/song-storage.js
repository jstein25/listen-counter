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
    if (song) {
        localStorage.setItem(song, getListensFromStorage());
    }
}

// sets song in storage
function setSong(value) {
    song = value;
}

function getSong() {
    return song;
}

function setListens(value) {
    localStorage.setItem(song, value);
}

function getListensFromStorage() {
    return parseInt(localStorage.getItem(song)) || 0;
}

//return js object with songs and number of listens
function getLocalStorageEntries() {
    const entries = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        entries.push([key, localStorage.getItem(key)]);
    }
    return entries;
}

export {
    setSong,
    getSong,
    storeSong,
    getListensFromStorage,
    getLocalStorageEntries,
    setListens,
};
