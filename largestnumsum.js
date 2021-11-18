const sumLargestNumbers = function(data) {
  let sum;
  for(let i = 0; i < data.length ; i++) {
    for(let j =i+1; j <data.length ; j++) {
       if( data[i] > data[j]) {
         let swapNum=data[j];
         data[j] = data[i];
         data[i] = swapNum;
       }
    }
  }
  sum = data[data.length -1] + data[data.length - 2];
  console.log(data);
  return sum;
};
//console.log(sumLargestNumbers([1, 10]));
//console.log(sumLargestNumbers([1, 2, 3]));
//console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
//https://gist.github.com/simarjeet518/240a09fb788cfcf6f7cf412f2a39eb65

const conditionalSum = function(values, condition) {
  let sum = 0;;
  
    for(let i =0; i < values.length; i++) {
      if(values[i] % 2 === 0 && condition === 'even') {
        sum +=values[i]
      } else if (values[i] % 2 !== 0 && condition === 'odd') {
        sum +=values[i]
      }  
    }
  return sum;
  
};

//console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
//console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
//console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
//console.log(conditionalSum([], "odd"));

const numberOfVowels = function(data) {
  let count = 0;
  let vowels = ['a','e','i','o','u']
  for(let i = 0; i < data.length ; i++) {
    for(let j = 0; j < vowels.length ; j++) {
        if(data[i] === vowels[j]) {
          count++;
        }
    }
  }
  return count;
  
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));