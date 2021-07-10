//grab elements off the DOM

const generateButton = document.getElementById("generateBtn");
const result = document.getElementById("resultDiv");
const result1 = document.getElementById("resultDiv1");
const result2 = document.getElementById("resultDiv2");
let kissnHug = document.createElement("div");
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


array1.forEach((currentValue) => {
if (currentValue === "X") {
   kissnHug = document.createElement("div");
   kissnHug.innerHTML = "X";
   result.append(kissnHug);
   exes++; 
} else {
   kissnHug = document.createElement("div");
   kissnHug.innerHTML = "O";
   result.append(kissnHug);
   ohs++; 
}
});
if (exes === ohs) {
   finalCount.innerHTML = `Yes, there is an equal amount of Hugs and Kisses! ❤️`;
} else {
   finalCount.innerHTML = `No, there is not an equal amount of Hugs and Kisses.  💋's: ${exes}, 🤗's: ${ohs}`; 
   }
}

//create a way to clear the previous values.

function clearArray(array) {
   array1 = [];
   clearButton.classList.toggle("hidden");
   generateButton.classList.toggle("hidden");
 
  for (let i = array.length - 1; i > 0; i--) {
      result.innerHTML = "";
  } 
  finalCount.innerHTML = "";
}

//make it so when the user clicks the button, a set of 6 X's and O's are automatically generated, rendered to the page, and counted.

generateButton.addEventListener('click', function(e) {
   e.preventDefault();
   return randomXandO(), countXsandOs();
})

clearButton.addEventListener('click', function(e) {
   e.preventDefault();
   return clearArray(array1);
})


