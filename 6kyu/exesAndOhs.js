function XO(str) {
    //code here
 let arr = str.toLowerCase().split('');
  return arr.filter(element => element == 'x').length == arr.filter(element => element == 'o').length;
}