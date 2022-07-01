function blocksAway(directions){
  let result = {};
  let lastDirection = null;
  let north = 0;
  let east = 0;
  for(let i = 0; i < directions.length; i += 2){
    if(directions[i] == "left"){
      if(lastDirection == null){
        east -= directions[i + 1];
        lastDirection = "west";
      }
      else if(lastDirection == "north"){
        east -= directions[i + 1];
        lastDirection = "west";
      }
      else if(lastDirection == "south"){
        east += directions[i + 1];
        lastDirection = "east";
      }
      else if(lastDirection == "west"){
        north -= directions[i + 1];
        lastDirection = "south";
      }
      else if(lastDirection== "east"){
        north += directions[i + 1];
        lastDirection = "north";
      };
    };
    if(directions[i] == "right"){
      if(lastDirection == null){
        east += directions[i + 1];
        lastDirection = "east";
      }
      else if(lastDirection == "north"){
        east += directions[i + 1];
        lastDirection = "east";
      }
      else if(lastDirection == "south"){
        east -= directions[i + 1];
        lastDirection = "west";
      }
      else if(lastDirection == "west"){
        north += directions[i + 1];
        lastDirection = "north";
      }
      else if(lastDirection == "east"){
        north -= directions[i + 1];
        lastDirection = "south";
      };
    };
  };
  result["east"] = east;
  result["north"] = north;
  return result;
};