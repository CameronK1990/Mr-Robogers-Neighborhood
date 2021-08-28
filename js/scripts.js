// Business Logic

function robotResponse (sentence) {
  let robotResArr = [];
  for (let i = 0; i <= sentence; i++) {
    if (i.toString().includes("3")) {
      robotResArr.push("Will you be my neighbor?");
    } else if (i.toString().includes("2")) {
      robotResArr.push("Boop!");
    } else if (i.toString().includes("1")) {
      robotResArr.push("Beep!");
    } else {
      robotResArr.push(i);
    }
  }
  return robotResArr;
}

// Frontend Logic

$(document).ready(function() {
  $("form#robot").submit(function(event) {
    event.preventDefault();
    const userInput = ($("input#userinput").val());
    const response = robotResponse(userInput);
    $("#robottext").append(response);
    $(".robotsays").show();
  });
});
