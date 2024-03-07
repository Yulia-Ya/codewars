function alphabetPosition(text) {
    let arr= []
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  let sign = text.toLowerCase()
 

  for(let i= 0; i <= text.length; i++){
    if(alphabet.includes(sign[i]) ){
      arr.push(alphabet.indexOf(sign[i]))
    }
  }
  return arr.map( el => el + 1).join(' ')
  }
  
  console.log(alphabetPosition("The sunset sets at twelve o' clock."))