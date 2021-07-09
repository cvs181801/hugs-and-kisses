//grab elements off the DOM

const generateButton = document.getElementById("generateBtn");
const result = document.getElementById("resultDiv");
let kissnHug = document.createElement("p");
const finalCount = document.getElementById("countDiv");
const clearButton = document.getElementById("clearBtn");

//create a way to randomly generate a set of 6 x's and o's.

function randomXandO() {
   if (Math.random() > .5 ) {
      // kissnHug.innerHTML = "X";
      // result.append(kissnHug);
      return "X";
   } else {
      // kissnHug.innerHTML = "O";
      // result.append(kissnHug);
      return "O";
   }
}

array1 = [randomXandO(),randomXandO(),randomXandO(),randomXandO(),randomXandO(),randomXandO()];

console.log(array1);

//create a way to count up and compare the x's and o's in the set.  Is there an equal amount of each, or not?

function countXsandOs() {
   clearButton.classList.toggle("hidden");
   generateButton.classList.toggle("hidden");
let exes = 0;
let ohs = 0;
result.innerHTML = "";

array1.forEach((currentValue) => {
if (currentValue === "X") {
   kissnHug = document.createElement("p");
   kissnHug.innerHTML = "X";
   result.append(kissnHug);
   exes++; 
} else {
   kissnHug = document.createElement("p");
   kissnHug.innerHTML = "O";
   result.append(kissnHug);
   ohs++; 
}
});
// console.log(exes);
// console.log(ohs);
if (exes === ohs) {
   //console.log("equal!");
   finalCount.innerHTML = "";
   finalCount.innerHTML = `There is an equal amount of X's and O's!`;
   //return `There is an equal amount of X's and O's!`
} else {
   //console.log("not equal");
   finalCount.innerHTML = "";
   finalCount.innerHTML = `There is not an equal amount of X's and O's.  X's: ${exes}, O's: ${ohs}`;
   //return `There is not an equal amount of X's and O's.
   //X's: ${exes}, O's: ${ohs}`;
}
}

//create a way to clear the previous values.

function clearArray(array) {
   clearButton.classList.toggle("hidden");
   generateButton.classList.toggle("hidden");
 
  for (let i = array.length - 1; i > 0; i--) {
      result.innerHTML = "";
  } 
}

//console.log(countXsandOs());

//make it so when the user clicks the button, a set of 6 X's and O's are automatically generated, rendered to the page, and counted.

generateButton.addEventListener('click', function(e) {
   e.preventDefault();
   console.log("it worked!");
   return randomXandO(), countXsandOs();
})


