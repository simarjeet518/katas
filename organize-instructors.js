const organizeInstructors = function(instructors) {
  let result={};
  
  for (let item of instructors) {
    
    result[item.course] = [];
  } 
  for (let item of instructors) {
    if (item.course === object.keys(result)) {
    result[item.course] =[];
    }
  }
  
  return result;
};


console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));