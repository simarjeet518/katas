
const calculateChange = function(total, cash) {
  let result ={};
  let change = cash-total;
  let number = parseInt(change/1000);
  if (number) {
     if(parseInt(number/2)){
       result.twentyDollar = parseInt(number/2);
     } 
     if (number % 2 ) {
       result.tenDollar = number % 2;
     }
  }   // tens and twenties calculated
  // code below calculates peeny nickel and dimes

  let changeReminder = change%1000;
   let number2 = parseInt(changeReminder/100);
   if((number2/ 2)){
     result.twoDollar = parseInt(number2/ 2);
   } 
    if(number2 %2) {
     result.oneDollar = number2 % 2;
   }
  let changeReminder1 = change % 100;
  if( changeReminder1 < 25 ){ 
    calculateDimeNiklPenny(changeReminder1 ,result);
}
  if(changeReminder1 >=25) {
  if(parseInt(changeReminder1/25)){
    result.quarter = parseInt(changeReminder1/25) ;
    changeReminder1 = changeReminder1 -(25 * parseInt(changeReminder1/25));
    calculateDimeNiklPenny(changeReminder1,result);
  } 
  
}
  
  
 

  return result;
};
const calculatePennyandNikles = function (number , result) {  // function to calculate penny and nickel
  if(parseInt(number/5)){
    result.nickel = parseInt(number/5);
  } else if (number % 5) {
    result.penny = number % 5;
  }

}
const calculateDimeNiklPenny = function (changeReminder1 ,result) {   //function to calculate penny and nickel and dime
  if (changeReminder1 > 10) {
    if(parseInt(changeReminder1/10)) {
        result.dime =parseInt(changeReminder1/10);
    } 
    if(changeReminder1 % 10) {
      if((changeReminder1 % 10) > 5){ 
        calculatePennyandNikles((changeReminder1 % 10),result);
      } else {
        result.penny = changeReminder1 % 10;
      } 
    }
  } else if(changeReminder1 > 5){
    calculatePennyandNikles(changeReminder1,result);

  } else {
    result.penny = changeReminder1;
  }
}




console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));