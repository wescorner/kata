function repeatNumbers(data){
  const result = [];
  for(let i = 0; i < data.length; i++){
    let str = "";
    for(let j = 0; j < data[i][1]; j++){
      str += data[i][0];
    }
    result.push(str);
  }
  return result.toString();
};