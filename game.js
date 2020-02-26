function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("coucou")

while (confirm("Bienvenue voulez vous jouer?")) {
  let randomNumber = getRandomInt(1, 100);
  let count = 0;
  let number = 0;
  while (number != randomNumber) {
    count++;
    number = parseInt(prompt("Saisie un nombre entre 1 et 100", "Saisie ton nombre ici"));
    if (number > randomNumber) {
      alert("Choose a lower number");
    } else if (number < randomNumber) {
      alert("Choose a higher number");
    }
  }

  alert("Great job :) you have found in " + count + " " + "hits");
}
