// Description:
// You are given an array (which will have a length of at least 3, 
//   but could be very large) containing integers. 
//   The array is either entirely comprised of odd integers or entirely comprised 
//   of even integers except for a single integer N. Write a method that takes the 
//   array as an argument and returns this "outlier" N.

function findOutlier(integers){
    let odd =  integers.filter(el => el % 2 === 0)
    let even =  integers.filter(el => el % 2 !== 0)
  return odd.length > even.length ? even : odd
  }

  console.log(findOutlier());
  