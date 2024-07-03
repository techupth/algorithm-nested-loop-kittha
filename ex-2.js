// เริ่มเขียนโค้ดตรงนี้
function printStar(rep) {
  for (let i = 1; i < rep + 1; i++) {
    // console.log("row num =", i);
    let printString = "";
    for (let j = 1; j < i + 1; j++) {
      printString += "*" + "\t";
      //   console.log("column =", printString);
    }
    console.log(printString);
  }
}

printStar(5);
