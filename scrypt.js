let userName = document.querySelector("#username").value;
console.log(userName.value);

//FUNCIÓN CLICK
const clickHere = document.getElementById("clickBtn");

let counter = 0;

clickHere.addEventListener("click", counterClick);

function counterClick() {
  counter += 1; //counter++ también valdría y sin el 1.
  console.log(counter); //o escribir counter en la consola directamente e intro
}
//Capturando username

document.getElementById("username").addEventListener("click", saveName);

function saveName() {
  var userName = document.getElementById("username").value;
}
