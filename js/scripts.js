// Business Logic
function robotResponse (sentence) {
  let robotResArr = [];
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence.charAt(i);
    if (character.includes("3")) {
      robotResArr.push("Will you be my neighbor?");
    } else if (character.includes("2")) {
      robotResArr.push("Boop!");
    } else if (character.includes("1")) {
      robotResArr.push("Beep!");
    } else {
      robotResArr.push(character);
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
    alert(response);
  });
});
