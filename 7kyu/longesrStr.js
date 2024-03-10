function longest(s1, s2) {

    let splittedS1= s1.split('').sort()
 let arr = []

  if(s1.length > s2.length){
    for( let i = 0; i < splittedS1.length; i++){
      if(!arr.includes(i)){
        arr.push(splittedS1)
        
      }
       
    }
   
  }
  return (arr.join(''))
 
  }
