// display today's date
var currentDate = dayjs();
  $('#currentDay').text(currentDate.format('dddd, MMMM D, YYYY'));
// get current number of hours.
var hour = dayjs().hour();
  
$(document).ready(function () {
  // looping over time blocks to check time and add classes for different background color
  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

    if (timeBlock < hour) {
      $(this).addClass("past");
    
    } else if (timeBlock === hour) {
      $(this).addClass("present");
    
    } else {
      $(this).addClass("future");
    }
  })

  // save button click listener 
  $("button").click(function () {
    // values into variables
    var plan = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Saving text in local storage
    localStorage.setItem(time,plan);
  })

  // Getting data from local storage
  $(function () {
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    })

})





