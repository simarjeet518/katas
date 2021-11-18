const multiplicationTable = function(maxValue) {
  let number , finalResult="";
  for (let i =1 ;i <= maxValue; i++) {
    number = 0;
    finalResult +="\n";
    for( let j = 0; j <maxValue; j++) {
        number = number + i;
        finalResult +=`${number} `;
    }
  }
  return finalResult;
  
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));