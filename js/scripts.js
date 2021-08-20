//Business Logic

const pageInput = parseInt($("input#userinput").val());

let robotResArr = [];

function robotResponse (string) {
  for (let i=0; i <= pageInput; i++) {
    const string = i.toString();
    if (string.includes(1)) {
      robotResArr.push("Beep!");
    } else {
      robotResArr.push(string);
    }
  }
  return robotResArr;
}
// working on replacing entered value of 1 to string Beep!

