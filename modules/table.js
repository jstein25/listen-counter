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
import { scanStorage } from "./song-storage.js";

function loadTable() {
    let tblBody = "";
    for (const [key, value] of Object.entries(scanStorage())) {
        let row = "<tr>";
        row += `<td>${key}</td>`;
        row += `<td>${value}</td>`;
        row += "<tr>";
        tblBody += row;
    }
    return tblBody;
}

export { loadTable };
