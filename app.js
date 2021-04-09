let palos = ["♦", "♥", "♣️", "♠️"];
let numeros = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function randomCard() {
  let SinglePalos = palos[Math.floor(Math.random() * palos.length)];
  let SingleNumeros = numeros[Math.floor(Math.random() * numeros.length)];
  let showCarta = `${SingleNumeros}${SinglePalos}`;
  document.getElementById("showing").style.background = "#0accff";
  document.getElementById("showing").innerHTML = showCarta;
}
randomCard();
