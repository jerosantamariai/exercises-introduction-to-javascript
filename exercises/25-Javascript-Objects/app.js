var person = {
    name: "John",                    //String
    lastname: "Doe",
    age: 35,                         //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2       //Object, yes the same variable/object defined after
};

person.lucky_numbers[3] = 33;

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var person3 = {
  name: "Jimmy",
  lastname: "Doe",
  age: 13,
  gender: "male",
  lucky_numbers: [1,2,3,4],
  significant_other: null
};
//Little Jimmy's object


var family = {
    lastname: "Doe",
    members: [person, person2]       //Array of objects, don't forget to add Jimmy
};

family.members.push(person3)

function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
 
  //To-Do: loop and add
  //Hint: use the anArray variable to get all of the lucky numbers
  

  for(var k=0;k<family.members.length;k++){
    
    for(var l=0;l<family.members[k].lucky_numbers.length;l++){
      sumOfAllLuckyNumbers+=family.members[k].lucky_numbers[l];
    }
    
  }
 
  return sumOfAllLuckyNumbers;
}

console.log(addAllFamilyLuckyNumbers(family.members)); //Step 3