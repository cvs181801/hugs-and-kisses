


//create a way to randomly generate a set of 6 x's and o's.

function randomXandO() {
   if (Math.random() > .5 ) {
      return "X";
   } else {
      return "O";
   }
}

array1 = [randomXandO(),randomXandO(),randomXandO(),randomXandO(),randomXandO(),randomXandO()];

console.log(array1);

//create a way to count up and compare the x's and o's in the set.  Is there an equal amount of each or not?

function countXsandOs() {
let exes = 0;
let ohs = 0;

array1.forEach((currentValue) => {
if (currentValue === "X") {
   exes++; 
} else {
   ohs++; 
}
});
// console.log(exes);
// console.log(ohs);
if (exes === ohs) {
   //console.log("equal!");
   return `There is an equal amount of X's and O's!`
} else {
   //console.log("not equal");
   return `There is not an equal amount of X's and O's.
   X's: ${exes}, O's: ${ohs}`;
}
}

console.log(countXsandOs());


