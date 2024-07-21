var btn = document.querySelector('.btn');
var dice1 = document.querySelector('.dice-1');
var dice2 = document.querySelector('.dice-2');

function dicegame(e) {
  var random1 = Math.floor(Math.random() * 6) + 1;
  var random2 = Math.floor(Math.random() * 6) + 1;

  function updateDice(dice, random, baseClass) {
    dice.innerHTML = random;
    dice.className = baseClass; 
    switch (random) {
      case 1:
        dice.classList.add("one");
        break;
      case 2:
        dice.classList.add("two");
        break;
      case 3:
        dice.classList.add("three");
        break;
      case 4:
        dice.classList.add("four");
        break;
      case 5:
        dice.classList.add("five");
        break;
      case 6:
        dice.classList.add("six");
        break;
    }
  }

  updateDice(dice1, random1, 'dice dice-1');
  updateDice(dice2, random2, 'dice dice-2');

  if (random1 === random2) {
    document.querySelector(".text1").innerHTML = "VIOLET & CREAM";
    document.querySelector(".text2").innerHTML = "DRAW";
  } else if (random1 > random2) {
    document.querySelector(".text1").innerHTML = "VIOLET";
    document.querySelector(".text2").innerHTML = "WON";
  } else {
    document.querySelector(".text1").innerHTML = "WON";
    document.querySelector(".text2").innerHTML = "CREAM";
  }
}

btn.addEventListener('click', dicegame);
