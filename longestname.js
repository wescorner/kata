function instructorWithLongestName(instructors){
  //receive array of objects and return object with longest name
  let longestLength = 0;
  let longestInstructor;
  for(const instructor of instructors){
    if(instructor.name.length > longestLength){
      longestInstructor = instructor;
      longestLength = instructor.name.length;
    }
  }
  return longestInstructor;
}
