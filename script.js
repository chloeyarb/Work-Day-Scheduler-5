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

//eventlisten for onclick save btn to set text in local storage (setItem). Take the value 
$(".saveBtn").click(function(){
    
})
// localStorage.setItem(taskDescription)

$(".time-block").each(function(){
    var key = $(this).attr("id");
    var savedTasks = localStorage.getItem(key);
    $(this).children(".description").val(savedTasks);
}) 

// var saveEvent = function() {
//     localStorage.setItem('allEvents', JSON.stringify(correctCount));
//     JSON.parse(localStorage.getItem('allEvents'));

// blah.textcontent = (localStorage.getItem)

//     var allEvents = [];
// }
// saveEvent();

})
