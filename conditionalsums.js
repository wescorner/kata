function conditionalSum(arr, con){
  //sum the numbers matching the condition(odd/even)
  let sum = 0;
  if(con === "odd"){
    for (let i = 0; i < arr.length; i++){
      if(arr[i] % 2 != 0){
        sum += arr[i];
      }
    }
  }else if(con === "even"){
    for (let i = 0; i < arr.length; i++){
      if(arr[i] % 2 == 0){
        sum += arr[i];
      }
    }
  }
  return sum;
}