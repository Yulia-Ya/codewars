function sortArray(array) {
    const arrOdd =array.filter( el => el % 2 !== 0).sort((a, b) => a - b)
   return array.map( el => el % 2 !== 0 ?  arrOdd.shift() : el)
  }