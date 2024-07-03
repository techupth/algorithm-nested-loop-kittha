// เริ่มเขียนโค้ดตรงนี้
function printPattern(rep) {
  for (let i = 1; i < rep + 1; i++) {
    // console.log("row num =", i);
    let printString = "";
    for (let j = 1; j < i + 1; j++) {
      printString += j + "\t";
      //   console.log("column =", printString);
    }
    console.log(printString);
  }
}

printPattern(5);
