//Business Logic

const pageInput = ($("input#userinput").val());



function robotResponse (sentence) {
  let robotResArr = [];
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence.charAt(i);
    if (character.includes("1")) {
      robotResArr.push("Beep!");
    } else {
      robotResArr.push(character);
    }
  }
  return robotResArr;
}
// working on replacing entered value of 1 to sentence Beep!


