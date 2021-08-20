//Business Logic

let pageInput = parseInt($(input#userinput).val());

let robotResArr = [];

function robotResponse (pageInput) {
  for (let i=0; i <= pageInput; i++) {
    const pageInput = i.toString();
    if (pageInput.includes(1)) {
      robotResArr.push("Beep!");
    } else if {
      robotResArr.push(pageInput);
    }
  }
  return robotResArr;
}

