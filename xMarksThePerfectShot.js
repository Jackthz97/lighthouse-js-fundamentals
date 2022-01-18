const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  let array = [];
  for (let postions of moves){
    if (postions === "north"){
      y++;
    }
    else if (postions === "south"){
      y--;
    }
    else if (postions === "east"){
      x++;
    }
    else if(postions === "west"){
      x--;
    }
  }
  array.push(x,y);
  return array;
}
console.log(finalPosition(moves));

//Passed