const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  
  let name1 = ingredientsCheck(bakeryA,recipes);    // collect receipes names who has bakeryA ingredients in stock
  let name2  =ingredientsCheck(bakeryB ,recipes);   //collect receipes names who has bakeryB ingredients in stock

  for (names of name1){        // compare if there is any common receipes whoz ingrdients is in stock
    for (namess of name2){
      if(names === namess){
        return names;        // return receipe name whoz ingredient is in both bakeries.
      } 
    }
  }

 }


const ingredientsCheck = function(bakery,recipes) {  // function to check ingredient of receipe from any bakery
  const name=[];
  
  for ( let  arr of recipes) {        // itrate through all items in receips
    for (let ingredient of bakery) {    //itirate through all ingredients of bakery
      for (let item of arr.ingredients)  //itirate through all ingredients from each bakery
        if (item === ingredient) {      // check if ingredient from specific receipe is in bakery
          name.push(arr.name);         //if yes push name of the receipe to the array
        }
    }
    }
  
  return name;
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron','cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];


console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes)); 