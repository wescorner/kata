function makeCase(input, caseType){
  if(!Array.isArray(caseType)){
    if(caseType == "camel"){
      return camelCase(input);
    }
    else if(caseType == "pascal"){
      return pascalCase(input);
    }
    else if(caseType == "snake"){
      return snakeCase(input);
    }
    else if(caseType == "kebab"){
      return kebabCase(input);
    }
    else if(caseType == "title"){
      return titleCase(input);
    }
    else if(caseType == "vowel"){
      return vowelCase(input);
    }
    else if(caseType == "consonant"){
      return consonantCase(input);
    }
    else if(caseType == "upper"){
      return input.toUpperCase();
    }
    else if(caseType == "lower"){
      return input.toLowerCase();
    }
  }
  else{
    //sort case array then iteratively apply them
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    for(const c of caseType){
      if(c == "upper" || c == "lower"){
        arr3.push(c);
      }
      else if(c == "vowel" || c == "consonant"){
        arr2.push(c);
      }
      else{
        arr1.push(c);
      }
    }
    const finalArr = arr1.concat(arr2, arr3);
    for(const apply of finalArr){
      input = makeCase(input, apply);
    }
    return input;
  }
};

function camelCase(input){
  input = input.toLowerCase();
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

function pascalCase(input){
  input = input.toLowerCase();
  let arr = input.split(" ");
  result = "";
  for (let i = 0; i < arr.length; i++){
    arr[i] = (arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    result += arr[i];
  }
  return result;
};

function snakeCase(input){
  input = input.toLowerCase();
  return input.split(" ").join("_");
};

function kebabCase(input){
  input = input.toLowerCase();
  return input.split(" ").join("-");
};

function titleCase(input){
  input = input.toLowerCase();
  let arr = input.split(" ");
  for (let i = 0; i < arr.length; i++){
    arr[i] = (arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return arr.join(" ");
};

function vowelCase(input){
  input = input.toLowerCase();
  const vowels = "aeiou";
  let result = input.split("").map(function(x) {
    return (vowels.indexOf(x) > -1) ? x.toUpperCase() : x;
  });
  return result.join("");
};

function consonantCase(input){
  input = input.toLowerCase();
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let result = input.split("").map(function(x) {
    return (consonants.indexOf(x) > -1) ? x.toUpperCase() : x;
  });
  return result.join("");
};