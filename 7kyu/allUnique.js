function hasUniqueChars(str){
    return str.split('').every((el, item, str) => 
      str.indexOf(el) === item
    );
  }