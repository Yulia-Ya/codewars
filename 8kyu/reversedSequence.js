//DESCRIPTION:

//Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
    const result = [];
    
    for (let i = n; i > 0; i = i - 1) {
      
      result.push(i);
    }  
     
    return result ;
  };