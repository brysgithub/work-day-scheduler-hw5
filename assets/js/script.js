var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

var currentTime = moment().format("LT");
console.log(currentTime);