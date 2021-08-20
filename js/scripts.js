//Business Logic

let pageInput = parseInt($(input#userinput).val());

let robotRes = [];

function robotResponse (string) {
  for (let i=0; i <= pageInput; i++) {
    const string = i.toString();
      robotRes.push(string);
  }
  return robotRes;
}

