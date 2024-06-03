//  function highAndLow(numbers){
//     const sorted =  numbers.split(' ').map(el => +el).sort((a,b) => a-b)
//     return `${sorted[sorted.length-1]} ${sorted[0]}`
//   }

const student = {
  name: "Eva"
}

const newStudent = student 

const myFriend = {
  ...newStudent 
}

const newUser = { 
  name: "Rita"
}

const myFriendName =  student.name !== myFriend.name 
    ? newUser.name
    : student.name
console.log(myFriendName);
/*Какое значение получит переменная "myFriendName"?*/