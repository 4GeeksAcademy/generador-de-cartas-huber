/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let randomPalo = numeroAleatorio(PALOS.length);
  console.log(randomPalo);
  let color;
  if (randomPalo <= 1) {
    color = "red";
  } else {
    color = "black";
  }

  divsPalos[0].innerHTML = PALOS[randomPalo];

  divsPalos[0].classList.add(color);
  divsPalos[1].classList.add(color);

  divsPalos[1].innerHTML = divsPalos[0].innerHTML;
  divNumero[0].innerHTML = NUMEROS[numeroAleatorio(NUMEROS.length)];
};
const PALOS = ["♥", "♦", "♣", "♠"];
const NUMEROS = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "K", "Q"];

let divsPalos = document.getElementsByClassName("palos");
let divNumero = document.getElementsByClassName("numero");

function numeroAleatorio(length) {
  return Math.floor(Math.random() * length);
}
