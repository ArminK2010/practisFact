let x = +prompt("number........?");

function factoriel(number) {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum *= i;
  }
  document.write(`<h1>factoriel ${number} is ${sum}</h1>`)
}
factoriel(x)