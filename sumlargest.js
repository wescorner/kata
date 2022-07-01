const sumLargestNumbers = function(data){
  //return the sum of the largest 2 numbers in given array
  let largest1 = null;
  let largest2 = null;
  for(let i = 0; i < data.length; i++){
    if(data[i] > largest1){
      largest2 = largest1;
      largest1 = data[i];
    }else if(data[i] > largest2){
      largest2 = data[i];
    }
  }
  return largest1 + largest2;
};
