/*
===============================
  Table Script
  Author: Jeff
  Description: Dynamically updates
  first three rows of table for 
  listen counter. (indiscriminate of 
  insertion order based on local storage)
===============================
*/
import { getLocalStorageEntries, getSong } from "./song-storage.js";

function loadTableBody() {
    const tableEntries = getLocalStorageEntries();
    let tbody = "";
    for (const [key, value] of tableEntries) {
        let row = "<tr>";
        row += `<td>${key}</td>`;
        row += `<td>${value}</td>`;
        row += "</tr>";
        tbody += row;
    }

    // fill remaining rows
    let i = 0;
    while (tableEntries.length + i < 3) {
        tbody += "<tr><td></td><td></td></tr>";
        i++;
    }
    return tbody;
}

// work on this implementation:

// function updateTableListens() {
//     // uses setSong(), since this fn will
//     // only be called for the current song
//     let listenCount = parseInt(localStorage.getItem(getSong());
//     listenCount++;
//     localStorage.setItem(getSong(), listenCount);
// }

export { loadTableBody };