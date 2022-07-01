function whereCanIPark(spots, vehicle){
  //return coordinates of available parking space, or 'false' if there is none
  let x = 0;
  let y = 0;
  if(vehicle === 'regular'){
    console.log(spots.length)
    console.log(spots[0].length)
    for(let i = 0; i < spots.length; i++){
      for(let j = 0; j < spots[0].length; j++){
        console.log('test');
        if(spots[i][j] === 'R'){
          return [x, y];
        }else{
          x++;
        }
      }
      y++;
      x = 0;
    }
    return false;
  }else if(vehicle === 'small'){
    for(let i = 0; i < spots.length; i++){
      for(let j = 0; j < spots[0].length; j++){
        if(spots[i][j] === 'R' || spots[i][j] === 'S'){
          return [x, y];
        }else{
          x++;
        }
      }
      y++;
      x = 0;
    }
    return false;
  }else if(vehicle === 'motorcycle'){
    for(let i = 0; i < spots.length; i++){
      for(let j = 0; j < spots[0].length; j++){
        if(spots[i][j] === 'R' || spots[i][j] === 'S' || spots[i][j] === 'M'){
          return [x, y];
        }else{
          x++;
        }
      }
      y++;
      x = 0;
    }
    return false;
  }
};
