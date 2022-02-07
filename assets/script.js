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

        var tasks = $(this).attr("id");
        var savedTasks = localStorage.getItem(tasks);
        $(this).children(".description").val(savedTasks);
    })
}
colorCode();
//Local Storage

//eventlisten for onclick save btn to set text in local storage (setItem). Take the value 
$(".saveBtn").click(function(){
    var tasks = $(".time-block").attr("id");
    localStorage.setItem(".time-block", tasks);
})


})
