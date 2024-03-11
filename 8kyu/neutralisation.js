// DESCRIPTION:

// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example

// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.

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
console.log(neutralise("--++--", "++--++")) //"000000"