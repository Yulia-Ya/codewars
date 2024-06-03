//DESCRIPTION:

//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Examples

//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.split(" ").map(  
       el => el.split("").reverse().join("")).join( " " );
  }



  //This time no story, no theory. 
  //The examples below show you how to write function accum:
  //accum("abcd") -> "A-Bb-Ccc-Dddd"
  
  function accum(s) {
	return s.toLowerCase().split('').map((el,i) => el.toUpperCase(el) + el.repeat(i)).join('-')
}