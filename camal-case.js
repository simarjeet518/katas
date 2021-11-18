const camelCase = function(input) {
  let newString;
   const arr= input.split(" ");  //splits strings by space
  let newArr=[];
  for(let i = 0; i < arr.length ; i++) {
    if(arr[i] !== "") {     //new array only has strings as elements not spaces
      
      newArr.push(arr[i]);
    
    }
  }
   newString = newArr[0];
  for(let i = 1; i < newArr.length ; i++) {
    let subString="";
    for (let j =0; j< newArr[i].length ; j++) {
      if( j ===0 ){
        subString += newArr[i][j].toUpperCase();
      } else {
      subString += newArr[i][j];
      }
    }
    newString += subString;  
  
  }

return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));