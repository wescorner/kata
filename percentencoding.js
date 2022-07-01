function urlEncode(str){
  //replace whitespace in a string with '%20'
  let result = "";
  for(const char of str){
    if(char == " "){
      result += '%20';
    }else{
      result += char;
    }
  }
  return result.toString(); 
}