$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    console.log(text);

    localStorage.setItem(time, text);
  });
  function timeTracker() {
    const currentTime = moment().hours();

    $(".time-block").each(function () {
      let timeBlock = parseInt($(this).attr("id"));
      if (currentTime < timeBlock) {
        $(this).addClass("future");
      } else if (currentTime === timeBlock) {
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
    });
  }
  timeTracker();
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  $("#currentDay").text(moment().format("dddd MMMM Do YYYY"));
});
