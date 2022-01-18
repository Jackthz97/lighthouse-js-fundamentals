function range(x,y,z){
  let array = [];
  if ((x !== undefined && y !== undefined && z !== undefined) && (x <= y) && (z !== 0 && z >= 0)){
    for (let i = x; i <= y; i += z){
      array.push(i);
    }
    return array;
  }
  else{
    return array;
  }
}
console.log(range(0, 8, 2));
console.log(range(10, 30, 5));
console.log(range(-9, 3, 3));

//Passed