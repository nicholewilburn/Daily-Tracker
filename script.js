// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  //-------------------------------------------------------------------

  //Code working as intended
  //Optional todos
  //TODO: Check for ways to make the code more elegant. 
  ///////// Dynamically generate the hour-blocks with javascript.
  //TODO: Adding a clear button?
  //TODO: Update the colors and theme of the app...

$( document ).ready(function() {
  console.log( "ready!" );

  //Display the day, time and update it every second
  var displayTime = document.querySelector("#currentDay");
  var currentTime = dayjs().format('H');
  console.log(currentTime);
  setInterval(grabTime, 1000);
  function grabTime () {
      displayTime.textContent = dayjs().format('dddd h:mm a');
      //Update the currentime variable too and display new colors when the hour changes
      currentTime = dayjs().format('H');
      displayColor();
  }

  //Grabbing each hour as a var
  var hour08 = document.querySelector("#hour-8");
  var hour09 = document.querySelector("#hour-9");
  var hour10 = document.querySelector("#hour-10");
  var hour11 = document.querySelector("#hour-11");
  var hour12 = document.querySelector("#hour-12");
  var hour01 = document.querySelector("#hour-13");
  var hour02 = document.querySelector("#hour-14");
  var hour03 = document.querySelector("#hour-15");
  var hour04 = document.querySelector("#hour-16");
  var hour05 = document.querySelector("#hour-17");

  //Loading previous data if any
  var hour08in = localStorage.getItem("8AM");
  var hour09in = localStorage.getItem("9AM");
  var hour10in = localStorage.getItem("10AM");
  var hour11in = localStorage.getItem("11AM");
  var hour12in = localStorage.getItem("12PM");
  var hour13in = localStorage.getItem("1PM");
  var hour14in = localStorage.getItem("2PM");
  var hour15in = localStorage.getItem("3PM");
  var hour16in = localStorage.getItem("4PM");
  var hour17in = localStorage.getItem("5PM");

  $("#hour-08 textarea").val(hour08in);
  $("#hour-09 textarea").val(hour09in);
  $("#hour-10 textarea").val(hour10in);
  $("#hour-11 textarea").val(hour11in);
  $("#hour-12 textarea").val(hour12in);
  $("#hour-13 textarea").val(hour13in);
  $("#hour-14 textarea").val(hour14in);
  $("#hour-15 textarea").val(hour15in);
  $("#hour-16 textarea").val(hour16in);
  $("#hour-17 textarea").val(hour17in);

  //Saving input on button click depending on which hour button was clicked
  //localStorage.setItem("server", input.val());
  $(".saveBtn").click(function(){

    var hour08input = $("#hour-08 textarea").val();
    var hour09input = $("#hour-09 textarea").val();
    var hour10input = $("#hour-10 textarea").val();
    var hour11input = $("#hour-11 textarea").val();
    var hour12input = $("#hour-12 textarea").val();
    var hour13input = $("#hour-13 textarea").val();
    var hour14input = $("#hour-14 textarea").val();
    var hour15input = $("#hour-15 textarea").val();
    var hour16input = $("#hour-16 textarea").val();
    var hour17input = $("#hour-17 textarea").val();

    localStorage.setItem("8AM", hour08input);
    localStorage.setItem("9AM", hour09input);
    localStorage.setItem("10AM", hour10input);
    localStorage.setItem("11AM", hour11input);
    localStorage.setItem("12PM", hour12input);
    localStorage.setItem("1PM", hour13input);
    localStorage.setItem("2PM", hour14input);
    localStorage.setItem("3PM", hour15input);
    localStorage.setItem("4PM", hour16input);
    localStorage.setItem("5PM", hour17input);

});


  //--------------------------------
  //Displaying color depending on the hour, also disables past hours
    //08
    function displayColor() {
  if (currentTime == 8){
    $(hour08).addClass("present");
  } else if (currentTime > 8){
    $(hour08).addClass("past");
    $("#hour-8 textarea").prop('disabled', true);
  } else {
    $(hour08).addClass("future");
  }
      //09
  if (currentTime == 9){
    $(hour09).addClass("present");
  } else if (currentTime > 9){
    $(hour09).addClass("past");
    $("#hour-9 textarea").prop('disabled', true);
  } else {
    $(hour09).addClass("future");
  }
    //10
  if (currentTime == 10){
    $(hour10).addClass("present");
  } else if (currentTime > 10){
    $(hour10).addClass("past");
    $("#hour-10 textarea").prop('disabled', true);
  } else {
    $(hour10).addClass("future");
  }
    //11
  if (currentTime == 11){
    $(hour11).addClass("present");
  } else if (currentTime > 11){
    $(hour11).addClass("past");
    $("#hour-11 textarea").prop('disabled', true);
  } else {
    $(hour11).addClass("future");
  }
    //12
  if (currentTime == 12){
    $(hour12).addClass("present");
  } else if (currentTime > 12){
    $(hour12).addClass("past");
    $("#hour-12 textarea").prop('disabled', true);
  } else {
    $(hour12).addClass("future");
  }
      //01
  if (currentTime == 13){
    $(hour01).addClass("present");
  } else if (currentTime > 13){
    $(hour01).addClass("past");
    $("#hour-13 textarea").prop('disabled', true);
  } else {
    $(hour01).addClass("future");
  }
        //02
  if (currentTime == 14){
    $(hour02).addClass("present");
  } else if (currentTime > 14){
    $(hour02).addClass("past");
    $("#hour-14 textarea").prop('disabled', true);
  } else {
    $(hour02).addClass("future");
  }
        //03
  if (currentTime == 15){
    $(hour03).addClass("present");
  } else if (currentTime > 15){
    $(hour03).addClass("past");
    $("#hour-15 textarea").prop('disabled', true);
  } else {
    $(hour03).addClass("future");
  }
          //04
  if (currentTime == 16){
    $(hour04).addClass("present");
  } else if (currentTime > 16){
    $(hour04).addClass("past");
    $("#hour-16 textarea").prop('disabled', true);
  } else {
    $(hour04).addClass("future");
  }
          //05
  if (currentTime == 17){
    $(hour05).addClass("present");
  } else if (currentTime > 17){
    $(hour05).addClass("past");
    $("#hour-17 textarea").prop('disabled', true);
  } else {
    $(hour05).addClass("future");
  }
}
  //END COLOR DISPLAY
  //--------------------------------

});

//Button to clear
$("#clear").click(function(){
  localStorage.clear();

  //Set the page to display none as well
  $("#hour-08 textarea").val("");
  $("#hour-09 textarea").val("");
  $("#hour-10 textarea").val("");
  $("#hour-11 textarea").val("");
  $("#hour-12 textarea").val("");
  $("#hour-13 textarea").val("");
  $("#hour-14 textarea").val("");
  $("#hour-15 textarea").val("");
  $("#hour-16 textarea").val("");
  $("#hour-17 textarea").val("");
});
