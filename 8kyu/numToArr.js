//DESCRIPTION:

//Convert number to reversed array of digits

//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    let arr = String(n).split('').reverse().map(Number);
  return arr;
  }
  console.log(35231);