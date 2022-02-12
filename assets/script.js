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
//Local Storage
//val is how to get value from local storage
//have to do getItem for each hr
$("#row-9 textarea").val(localStorage.getItem("row-9"))
$("#row-10 textarea").val(localStorage.getItem("row-10"))
$("#row-11 textarea").val(localStorage.getItem("row-11"))
$("#row-12 textarea").val(localStorage.getItem("row-12"))
$("#row-13 textarea").val(localStorage.getItem("row-13"))
$("#row-14 textarea").val(localStorage.getItem("row-14"))
$("#row-15 textarea").val(localStorage.getItem("row-15"))
$("#row-16 textarea").val(localStorage.getItem("row-16"))
$("#row-17 textarea").val(localStorage.getItem("row-17"))
//eventlisten for onclick save btn to set text in local storage (setItem). Take the value 
$(".saveBtn").click(function(){
    //$this is whichever save button the click is on - key
    var key = $(this).parent().attr("id");
    //will take the value of the text area
    var task = $(this).siblings("textarea").val()
    localStorage.setItem(key, task);
})


})
