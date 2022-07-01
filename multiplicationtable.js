function multiplicationTable(maxValue){
  result = "";
  for(let i = 1; i <= maxValue; i++){
    for(let j = 1; j <= maxValue; j++){
      result += (i * j) + " ";
    }
    result += "\n";
  }
  return result;
};