function squareCode(message){
  message = message.split(" ").join("");
  let squareLength = Math.ceil(Math.sqrt(message.length));
  let counter = 0;
  const arr = [];
  let result = "";
  while(counter < message.length){
    temp = [];
    for(let i = 0; i < squareLength; i++){
      temp.push(message.charAt(counter));
      counter++;
    };
    arr.push(temp);
  };
  for(let j = 0; j < squareLength; j++){
    for(const c of arr){
      result += c[j];
    };
    result += " ";
  };
  return result;
};
