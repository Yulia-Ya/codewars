function findOdd(A) {
    return A.find(el => A.filter((item)=> item === el).length % 2 )
   }