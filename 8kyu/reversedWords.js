//DESCRIPTION:

//Complete the solution so that it reverses all of the words within the string passed in.

//Words are separated by exactly one space and there are no leading or trailing spaces.

//SOLUTION

function reverseWords(str){
    str = str.split(' ').reverse().join(' ');
    return str; // reverse those words
  }

  console.log(reverseWords("The greatest victory is that which requires no battle"));