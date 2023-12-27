//DESCRIPTION:

//There is an array with some numbers. All numbers are equal except for one. Try to find it!

//SOLUTION

function findUniq(arr) {
    let x = arr.filter(el => el === arr[0])
    let y = arr.filter(el => el !== arr[0])
    
    return x.length > y.length ? y[0] : x[0]
  }