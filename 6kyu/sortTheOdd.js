// Description

// You will be given an array of numbers.
//  You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    const arrOdd =array.filter( el => el % 2 !== 0).sort((a, b) => a - b)
   return array.map( el => el % 2 !== 0 ?  arrOdd.shift() : el)
  }