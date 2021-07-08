


//create a way to randomly generate x's and o's 

function randomXandO() {
   if (Math.random() > .5 ) {
      return "X";
   } else {
      return "O";
   }
}

array1 = [randomXandO(),randomXandO(),randomXandO(),randomXandO(),randomXandO(),randomXandO()];

let num = 0;

array1.forEach((currentValue) => {
if (currentValue === "X") {
   num++;
} else {
   console.log(num);
   //return num;
}
console.log(num);
//return num;
});

console.log(num);

// function checkKisses(letter) {
//    return letter = x;
// }

//console.log(array1.filter(checkKisses(letter)));