


//create a way to randomly generate x's and o's 

function randomXandO() {
   if (Math.random() > .5 ) {
      return "X";
   } else {
      return "O";
   }
}

array1 = [randomXandO(),randomXandO(),randomXandO(),randomXandO(),randomXandO(),randomXandO()];

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
console.log(exes);
console.log(ohs);
}

console.log(countXsandOs());
// function checkKisses(letter) {
//    return letter = x;
// }

//console.log(array1.filter(checkKisses(letter)));