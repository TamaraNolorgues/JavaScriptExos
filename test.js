/* 2.1 Ajouter "quel est votre nom ?", le saisir et afficher "bonjour Jobs",  2.2 Faire de même pour le prénom

console.log("Hello World")
let first_name = prompt("What is your name?")
console.log("Hello"+" "+ first_name)

let last_name = prompt("What is your last name?")
console.log("Hello"+" "+ last_name)
*/




/* 2.3 Saisir l'âge puis afficher le resultat suivant :bienvenu sur mon site, Macro,vous êtes majeur !

console.log("Hi there?")
let age = prompt("How old are you?")
  if (age >=18) {
    console.log("Welcome to our website")
    console.log(/"Macron"/)
    console.log(/"Manu"/)
    console.log(/"You are old enough to visit our website"/)
  }
  else {
    console.log("Welcome to our website")
    console.log("Macron")
    console.log("Manu")
    console.log("You are not old enough to visit our website")
  }
  
*/



/* 2.5 Ecrivez un programme qui lit un nombre et indique s'il est positif, négatif ou s'il vaut zéro

console.log("Hey there!")
number = prompt("Write a number negative or positive")
 if (number >0) {
     console.log("This is a positive number")
 }
 else if (number <0) {
  console.log("This is a negative")
}

 else {
     console.log("This is zero")
 }
*/



/* 2.6 Ajouter la possibilitée de savoir si le nombre est pair ou impair
console.log("Hey there!")
numbers = prompt("Please write an integer or a float")
if (numbers % 2 == 0) {
  console.log("This is an even number")
}

else {
  console.log("This is an odd number")
}
*/


let i;
for (i = 1; i < 100; i++) {
  console.log("The number is", i)
}