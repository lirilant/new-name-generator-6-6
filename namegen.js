function nameGen() {
  const vowels = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let firstName = [];
  let lastName = [];
  for (let i = 0; i < 2; i++) {
    let rand = Math.floor(Math.random() * 10);
    firstName += consonants[rand];
    rand = Math.floor(Math.random() * 10);
    firstName += vowels[rand];
    rand = Math.floor(Math.random() * 10);
    firstName += consonants[rand];
  }
  for (let i = 0; i < 2; i++) {
    let rand = Math.floor(Math.random() * 10);
    lastName += consonants[rand];
    rand = Math.floor(Math.random() * 10);
    lastName += vowels[rand];
    rand = Math.floor(Math.random() * 10);
    lastName += consonants[rand];
  }
  return firstName + " " + lastName;
}

function namez(randomNamesAmount) {
  if (randomNamesAmount > 0) {
    let names = [];
    let randomNamesAmount1 = randomNamesAmount;
    while (randomNamesAmount1 > 0) {
      randomNamesAmount1--;
      names.push(nameGen());
    }
    return Array.from(names, (a) =>
      a.toLowerCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
      })
    );
  }
  throw "Input a positive number please";
}

//namez(10);
