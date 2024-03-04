function squareDigits(num){
    let res = num.toString().split('')
      return Number(res.map( (el) => el * el).join(''));
    
    }