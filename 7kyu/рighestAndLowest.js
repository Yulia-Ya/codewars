function highAndLow(numbers){
    const sorted =  numbers.split(' ').map(el => +el).sort((a,b) => a-b)
    return `${sorted[sorted.length-1]} ${sorted[0]}`
  }