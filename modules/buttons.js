/*
===============================
  Buttons Script
  Author: Jeff
  Description: Implements button
  functionality for listen counter.
===============================
*/

let ready;
let count = 0;

function plus() {
    count++;
    if (count >= 21) {
        ready = true;
    }
    return count;
}

function minus() {
    if (count > 0) {
        count--;
    }

    if (count < 21) {
        ready = false;
    }

    return count;
}

function setCount(value) {
    count = value;
}

function getCount() {
    return count;
}

function readyString() {
    if (ready) {
        return "Ready to sing!";
    } else {
        return "";
    }
}

export { plus, minus, readyString, getCount, setCount };