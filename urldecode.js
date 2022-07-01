function urlDecode(text){
  const pairs = text.split('&');
  let obj = {};
  for(const pair of pairs){
    obj[pair.split('=')[0]] = pair.split('=')[1].split('%20').join(" ");
  };
  return obj;
};