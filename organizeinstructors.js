function organizeInstructors(instructors){
  let obj = {};
  for(const instructor of instructors){
    obj[instructor.course] = [];
  };
  for(const i of instructors){
    obj[i.course].push(i.name);
  };
  return obj;
};