// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(number) {
  for (let i = 1; i < number + 1; i++) {
    // console.log("row: ", i);
    let printString = "";
    for (let j = 1; j < number + 1; j++) {
      let sum = i * j;
      printString += sum + "\t";
      //   console.log("column: ", j);
    }
    console.log(printString);
  }
}

multiplicationTable(5);
