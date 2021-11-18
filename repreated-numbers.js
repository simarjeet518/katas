const repeatNumbers = function(data) {
  let repeatedString="" ;
  
   for (let i =0; i < data.length; i++) {
     if( i !==0 ){
       repeatedString +=",";
     }
      for (let j = 1; j<= data[i][1]; j++ ) {
          repeatedString = repeatedString + data[i][0];
          
        
      }
   }
   
   return repeatedString;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));