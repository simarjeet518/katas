const instructorWithLongestName = function(instructors) {
  let longestName;
  for(let i =0; i < instructors.length; i++) {
    for(let j =i; j< instructors.length; j++) {
      if( instructors[i]['name'].length > instructors[j]['name'].length) {
        let swapNum=instructors[j];
        instructors[j] = instructors[i];    //sort array of objects
        instructors[i] = swapNum;
      }
      //console.log(instructors[i]);
    }
  }
  return instructors[instructors.length -1];  // printer highest value from sorted array
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
