const urlEncode = function(text) {
  const arr= text.split(" ");  //splits strings by space
  let newArr=[];
  for(let i = 0; i < arr.length ; i++) {
    if(arr[i] !== "") {     //new array only has strings as elements not spaces
      
      newArr.push(arr[i]);
    
    }
  }
  let newString =newArr[0];   // first strings of output
  for(let i = 1; i < newArr.length ; i++) {
    newString += "%20";          //every string separted by space starts with %20
    newString += newArr[i];  //combined string again just replaced white spaces.
  
  }

return newString;
    
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));