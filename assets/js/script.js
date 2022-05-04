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
        }
    }
};

function displaySave() {
    
    for (let i = 9; i < 18; i++) {
        
        var textAreaEl = $('[data-id="' + i + '"]');
        textAreaEl.val(localStorage.getItem(i));
        
    }
};

colorInput();
displaySave();

// Save button saves text inside of the textarea element to localStorage (saves inconsistently. lil broken. seems dependent on what was last clicked on page)
$('.saveBtn').on('click', (event) => {
    event.preventDefault();
    var posId = $(event.target).siblings('textarea').data('id');
    var text = $(event.target).siblings('textarea').val();

    localStorage.setItem(posId, text);
});

$('9 text').val(localStorage.getItem('9'));