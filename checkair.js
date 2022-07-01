function checkAir(samples, threshold){
  //return 'Polluted' if %clean is below threshold, and 'Clean' if above
  let counter = 0;
  for(const sample of samples){
    if(sample === 'dirty'){
      counter++;
    }
  }
  if(counter/samples.length < threshold){
    return 'Clean';
  }else{
    return 'Polluted';
  }
};