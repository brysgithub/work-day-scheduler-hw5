var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

var currentTime = moment().format("LT");
console.log(currentTime);
console.log(currentTime[0]);

function colorInput() {
    var textInputEL = document.getElementsByClassName("textInput");
    var hourEl = document.getElementsByClassName("hour");

    // TODO: figure out the right array to pull "array.length" from
    for (let i = 0; i < array.length; i++) {
        // TODO: add if else statements to make the timeblocks the correct color
        if (hourEl == currentTime[0]) {
            textInputEL.classList.add("present");
            console.log("present");
        } else if (hourEl > currentTime[0]) {
            textInputEL.classList.add("future");
            console.log("future");
        } else {
            textInputEL.classList.add("past");
            console.log("past");
        };
    };
};

//TODO: save user input to local storage to recall on page reload
function saveInput () {

};