var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

var currentTime = moment().format("LT");
console.log(currentTime);
var currentTime24Hours = moment().format("HH");
console.log(currentTime24Hours);

function colorInput() {
    
    for (let i = 9; i < 18; i++) {
        
        var textInputEl = $('[data-id="' + i + '"]');  

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
}

colorInput();

// var saveBtnEl = document.querySelector(".saveBtn");

// function storeText(textInput) {
//     localStorage.setItem("textInput", JSON.stringify(textInput));
// };

// saveBtnEl.addEventListener("click", function(event) {
//     event.preventDefault();
    
//     var parentElement = event.siblings(1)
//     var textInput = parentElement.childNodes[1];
//     console.log(textInput);
//     console.log(parentElement);

//     storeText(textInput.value);
// });

// Possible solution(Jquery event listener > create function > button event listener > from the button element traverse to textInput > call storeText)
$('button').on('click', function() {
    $(this).find('input').storeText();
});