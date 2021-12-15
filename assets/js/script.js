var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

var currentTime = moment().format("LT");
console.log(currentTime);
var currentTime24Hours = moment().format("HH");
console.log(currentTime24Hours);

function colorInput() {
    
    for (let i = 9; i < 18; i++) {
        
        var textInputEl = $('[data-id="' + i + '"]');  
        // TODO: add if else statements to make the timeblocks the correct color

        if (i == currentTime24Hours) {
            textInputEl.addClass('present');
            console.log("present");
        } else if (i > currentTime24Hours) {
            textInputEl.addClass('future');
            console.log("future");
        } else {
            textInputEl.addClass('past');
            console.log("past");
        };
    };
};

colorInput();

//TODO: save user input to local storage to recall on page reload
function saveInput () {
    //save things heererereerer
};