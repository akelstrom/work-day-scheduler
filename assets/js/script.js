//display current date and time in the jumbntron
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

  var hour = $(this).closest().val()
  var dataEntered = $(this).siblings("textarea").val()

  localStorage.setItem("",JSON.stringify(dataEntered));
});

//create a variable of the value of the textcontent
//use .value to get whats in that text content class
//take that value and set it into local storage- localstorage.setItem
//do I want to set it as an array/ objecct- do a test first
//loop through the array
//use JSONparse and JSON strigify to get them to object from string, and from string to object
//use "this.siblings" to get the value from the textarea box
//time- "this.parent.attr.id" and then save that to a variable, and then grab that variable and
//save it into local storage, will see the time saved as well.
