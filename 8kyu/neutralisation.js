function neutralise(s1, s2) {
    // Here be dragons!
   let arrS1 = s1.split('');
   let arrS2 = s2.split('')
   let array = []
   
   for( let i = 0; i < arrS1.length; i++){
     
       if(arrS1[i] === '-' && arrS2[i] === '-'){
         array.push('-')
       }
       else if(arrS1[i] === '+' && arrS2[i] === '+') {
         array.push('+')
       } else {
         array.push('0')
       }
     
    
   }
    return array.join('')
  }

  
  
console.log(neutralise("-+-+-+", "-+-+-+"))