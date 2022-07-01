const PI = Math.PI;

function sphereVolume(radius){
  return ((4 / 3) * PI * (radius ** 3));
};
function coneVolume(radius, height){
  return(PI * (radius ** 2) * (height / 3));
};
function prismVolume(height, width, depth){
  return (depth * width * height);
};

function totalVolume(solids){
  result = 0;
  for(const solid of solids){
    if(solid.type == 'sphere'){
      result += sphereVolume(solid.radius);
    }else if(solid.type == 'cone'){
      result += coneVolume(solid.radius, solid.height);
    }else if(solid.type == 'prism'){
      result += prismVolume(solid.height, solid.width, solid.depth);
    };
  };
  return result;
};