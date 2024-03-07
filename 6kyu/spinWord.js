function spinWords(string){
    let word =  string.split(' ').map(el => el.length >= 5) 
    word.reverse().join('') 

    
}
  
  
  console.log(spinWords("This is another test"))