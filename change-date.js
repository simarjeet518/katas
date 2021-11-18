const talkingCalendar = function(date) {
    let arrayOfDate = date.split("/"); //split date and store in array
    let month ,day;
     
       
       switch(arrayOfDate[1]) {
         case "01" :
           month = "January" ;
           break;
           case "02" :
           month = "Febuary" ;
           break;
           case "03" :
           month = "March" ;
           break;
           case "04" :
           month = "April" ;
           break;
           case "05" :
           month = "May" ;
           break;
           case "06" :
           month = "June" ;
           break;
           case "07" :
           month = "July" ;
           break;
           case "08" :
           month = "August" ;
           break;
           case "09 ":
           month = "Septembe" ;
           break;
           case "10" :
           month = "October" ;
           break;
           case "11" :
           month = "November" ;
           break;
           case "12" :
           month = "December" ;
           break;
           default :
           month ="don't exist" ;
           break;
       }
       if(arrayOfDate[2]>=1 && arrayOfDate[2]<= 9)
       { 
         arrayOfDate[2] = parseInt(arrayOfDate[2]);  //delete leading zero
        if(arrayOfDate[2]=== 1 || arrayOfDate[2]=== 2)
        {
          day =`${arrayOfDate[2]}nd`    // day 1,2 with "nd" nor with th
        } else if(arrayOfDate[2]== 3){
          day =`${arrayOfDate[2]}rd`
        }  else {
          day =`${arrayOfDate[2]}th`   // rest all have "th" behind day
        }
       } else {
         day = `${arrayOfDate[2]}th`;
       }

       return `${month} ${day}, ${arrayOfDate[0]}`;
       
     

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));