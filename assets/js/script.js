//time blocks object that will hold the data- right now it's set to empty string
var timeBlocks = {
  9: "",
  10: "",
  11: "",
  12: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
};

$("#currentDay").text(moment().format("dddd, MMMM Do"));
// document.querySelector("#currentDay").textContent = this is the javascript version of what I'm doing.

//change background color based on time
var currentHour = moment().hour();

$(".hour").each(function () {
  var inputTime = parseInt($(this).data("time"));

  if (currentHour === inputTime) {
    $(this).addClass("present");
  } else if (currentHour > inputTime) {
    $(this).addClass("past");
  } else if (currentHour < inputTime) {
    $(this).addClass("future");
  }
});

// Store text entered into an input when clicking save button
$(".saveBtn").click(function (event) {
  event.preventDefault();

  var hour = parseInt($(this).siblings("div").text().trim());
  var dataEntered = $(this).siblings("textarea").val().trim();

  //set time blocks hour to the data entered
  timeBlocks[hour] = dataEntered;
  //   console.log(timeBlocks[hour])
  localStorage.setItem("Time Blocks", JSON.stringify(timeBlocks));
  loadStoredData();
});

function loadStoredData() {
  var storedData = JSON.parse(localStorage.getItem("Time Blocks"));
  if (storedData) {
    timeBlocks = storedData;
  }
  //loading all time blocks data to html
  //seting the value of all html time slots equal to the value of the timeblocks object

  $("#hour-9 .description").val(timeBlocks[9]);
  $("#hour-10 .description").val(timeBlocks[10]);
  $("#hour-11 .description").val(timeBlocks[11]);
  $("#hour-12 .description").val(timeBlocks[12]);
  $("#hour-13 .description").val(timeBlocks[1]);
  $("#hour-14 .description").val(timeBlocks[2]);
  $("#hour-15 .description").val(timeBlocks[3]);
  $("#hour-16 .description").val(timeBlocks[4]);
  $("#hour-17 .description").val(timeBlocks[5]);
}

loadStoredData();
