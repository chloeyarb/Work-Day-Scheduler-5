$(document).ready(function(){

    var momentFormat = moment().format('LLL');
    // var currentDay = document.querySelector("#currentDay");
    $("#currentDay").text(momentFormat)
    // currentDay.textContent = momentFormat;

var colorCode = function() {
    //est time of day and row
    var timeOfDay = moment().hour(); // Number
    console.log(timeOfDay);

    $(".time-block").each(function(){
        //this will happen to each time block
        var rowHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(rowHour);

        if(rowHour < timeOfDay) {
            $(this).addClass("past");
        } else if (rowHour === timeOfDay) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    })
}
colorCode();






























})