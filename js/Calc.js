let num = document.querySelector("input");
let pilus = document.querySelector("#pilus");
let minus = document.querySelector("#minus");
let kopaytiru = document.querySelector("#Kopaytiru");
let barobar = document.querySelector("#barobar");
let bolu = document.querySelector("#bolu");
let tozalash = document.querySelector("#tozalash");
let dot = document.querySelector("#dot");
let bir = document.querySelector("#bir");
let ikki = document.querySelector("#ikki");
let uch = document.querySelector("#uch");
let tort = document.querySelector("#tort");
let besh = document.querySelector("#besht");
let olti = document.querySelector("#olti");
let yetti = document.querySelector("#yetti");
let sakkiz = document.querySelector("#sakkiz");
let toqqiz = document.querySelector("#toqqiz");
let nol = document.querySelector("#nol");

barobar.addEventListener("click", () => {
  num.value = eval(num.value);
});

pilus.addEventListener("click", () => {
  num.value = num.value + "+";
});
bir.addEventListener("click", () => {
  num.value = num.value + "1";
});
ikki.addEventListener("click", () => {
  num.value = num.value + "2";
});
uch.addEventListener("click", () => {
  num.value = num.value + "3";
});
nol.addEventListener("click", () => {
  num.value = num.value + "0";
});
yetti.addEventListener("click", () => {
  num.value = num.value + "7";
});
sakkiz.addEventListener("click", () => {
  num.value = num.value + "8";
});
toqqiz.addEventListener("click", () => {
  num.value = num.value + "9";
});
tort.addEventListener("click", () => {
  num.value = num.value + "4";
});
besh.addEventListener("click", () => {
  num.value = num.value + "5";
});
olti.addEventListener("click", () => {
  num.value = num.value + "6";
});
minus.addEventListener("click", () => {
  num.value = num.value + "-";
});
kopaytiru.addEventListener("click", () => {
  num.value = num.value + "*";
});
bolu.addEventListener("click", () => {
  num.value = num.value + "/";
});
dot.addEventListener("click", () => {
  num.value = num.value + ".";
});
tozalash.addEventListener("click", () => {
  num.value = num.value + "";
});
