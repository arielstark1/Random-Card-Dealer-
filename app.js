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
let colors = ["black ", "Red"

]
function randomCard() {


  let SingleColors = colors[Math.floor(Math.random() * colors.length)];
  let SinglePalos = palos[Math.floor(Math.random() * palos.length)];

  let SingleNumeros = numeros[Math.floor(Math.random() * numeros.length)];
  let showCarta = `${SinglePalos}`
  let showNumero=`${SingleNumeros}`
  let showInverso=`${SinglePalos}`;
  document.getElementById("container").style.background = "white";
  if (SinglePalos === "♦" || SinglePalos === "♥") {
    document.getElementById("container").style.color = "red";
  }

  document.getElementById("showCarta").innerHTML = showCarta;
  document.getElementById("showNumero").innerHTML = showNumero;
  document.getElementById("showInverso").innerHTML = showInverso;

}

randomCard();
