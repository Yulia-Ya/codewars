function digitalRoot(n) {
    let result = 0;
n.toString().split('').map (n => {
result += Number(n)
})
return result > 9 ? digitalRoot(result) : result;
  
 }
 
 
 console.log(digitalRoot(456))