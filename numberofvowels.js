function numberOfVowels(str){
  //return the number of vowels in given string
  let counter = 0;
  for(const letter of str){
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
      counter++;
    }
  }
  return counter;
}