// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$( document ).ready(function() {
  console.log( "ready!" );

  //Display the day, time and update it every second
  var displayTime = document.querySelector("#currentDay");
  var currentTime = dayjs().format('H');
  console.log(currentTime);
  setInterval(grabTime, 1000);
  function grabTime () {
      displayTime.textContent = dayjs().format('dddd h:mm a');
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



  //Event Listeners
  var saveBtnEl = document.querySelector("#saveBtn");

  //Loading previous data if any

  //Saving input on button click depending on which hour button was clicked
  //localStorage.setItem("server", input.val());

  //--------------------------------
  //Displaying color depending on the hour, also disables past hours
    //08
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
  //END COLOR DISPLAY
  //--------------------------------

});

$(function () {
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
});
