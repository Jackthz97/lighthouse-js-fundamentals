const whichSchool  = function (age) {
  if (age < 13 && age > 0){
    return "Elementary School";
  }
  else if (age >= 13 && age <= 18){
    return "Secondary School";
  }
  else if (age >= 18){
    return "Lighthouse Labs";
  }
}
console.log(whichSchool(35));
console.log(whichSchool(8));
console.log(whichSchool(14));