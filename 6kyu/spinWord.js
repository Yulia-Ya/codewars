function spinWords(string){
    let word =  string.split(' ').map(el => el.length >= 5) 
    word.reverse().join('') 

    
}
  
function spinWords(string){
  //TODO Have fun :)
  
  const reversed =(word)=>{
    return word.split('').reverse().join('')
  } 
  return string.split(' ').map(el => el.length >= 5 ? reversed(el): el).join(' ')
}
  console.log(spinWords("This is another test"))