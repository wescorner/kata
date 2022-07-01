function camelCase(input){
  let arr = input.split(" ");
  let result = arr[0];
  if(arr.length > 1){
    for (let i = 1; i < arr.length; i++){
      arr[i] = (arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
      result += arr[i];
    }
  }
  return result;
};