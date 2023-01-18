// Names and Input
let hacker1 = "Adrian"; //Driver
let hacker2 = "Mariano"; //Navigator
console.log ("The driver name is " + hacker1);
console.log ("The Navigator's name is " + hacker2)

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log ("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length){
  console.log ("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}else {
  console.log ("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

//Loops
// 1 Name Spaces/upperCases
let result = ' '
for (i = 0; i < hacker1.length; i++){
  hacker1[i];
  result += hacker1[i].toUpperCase() + ' ';
}
console.log(result);

// 2 Reverse Order
let wordReversed = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2[i];
  wordReversed += hacker2[i];
}
console.log(wordReversed);

// 3 Lexicographic Order

if (hacker1.localeCompare(hacker2) < 0){
  console.log("The driver's name goes first.");
}else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
}else {
  console.log("What?! You both have the same name?");
}