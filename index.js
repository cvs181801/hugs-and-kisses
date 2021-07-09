//grab elements off the DOM

const generateButton = document.getElementById("generateBtn");
const result = document.getElementById("resultDiv");
const result1 = document.getElementById("resultDiv1");
const result2 = document.getElementById("resultDiv2");
let kissnHug = document.createElement("p");
const finalCount = document.getElementById("countDiv");
const clearButton = document.getElementById("clearBtn");

//create a way to randomly generate a set of 6 x's and o's.

let array1 = [];

function randomXandO() {
   
   if (Math.random() > .5 ) {
      return "X";
   } else {
      return "O";
   }
}

//create a way to count up and compare the x's and o's in the set.  Is there an equal amount of each, or not?

function countXsandOs() {
   array1.push(randomXandO(),randomXandO(),randomXandO(),randomXandO(),randomXandO(),randomXandO());
   console.log(array1);
   clearButton.classList.toggle("hidden");
   generateButton.classList.toggle("hidden");
let exes = 0;
let ohs = 0;
result.innerHTML = "";
result1.innerHTML = "";
result2.innerHTML = "";


array1.forEach((currentValue) => {
if (currentValue === "X") {
   kissnHug = document.createElement("p");
   kissnHug.innerHTML = "X";
   result1.append(kissnHug);
   exes++; 
} else {
   kissnHug = document.createElement("p");
   kissnHug.innerHTML = "O";
   result2.append(kissnHug);
   ohs++; 
}
});
// console.log(exes);
// console.log(ohs);
if (exes === ohs) {
   finalCount.innerHTML = `There is an equal amount of Hugs and Kisses!`;
} else {
   finalCount.innerHTML = `There is not an equal amount of Hugs and Kisses.  X's: ${exes}, O's: ${ohs}`; 
   }
}

//create a way to clear the previous values.

function clearArray(array) {
   array1 = [];
   clearButton.classList.toggle("hidden");
   generateButton.classList.toggle("hidden");
 
  for (let i = array.length - 1; i > 0; i--) {
      result.innerHTML = "";
      result1.innerHTML = "";
      result2.innerHTML = "";
  } 
  finalCount.innerHTML = "";
}

//console.log(countXsandOs());

//make it so when the user clicks the button, a set of 6 X's and O's are automatically generated, rendered to the page, and counted.

generateButton.addEventListener('click', function(e) {
   e.preventDefault();
   console.log("generate btn worked!");
   return randomXandO(), countXsandOs();
})

clearButton.addEventListener('click', function(e) {
   e.preventDefault();
   console.log("clear btn worked!");
   return clearArray(array1);
})


