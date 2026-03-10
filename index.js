const big = document.getElementById("big");
const title = document.getElementById("title");

const key = document.getElementById("key");
const locationel = document.getElementById("location");
const codeel = document.getElementById("code");
const whichel = document.getElementById("which");

window.addEventListener("keydown", (e) => {

big.innerHTML = e.keyCode;

title.innerHTML = "JavaScript Key Code " + e.keyCode;

key.innerHTML = e.key;
codeel.innerHTML = e.code;
whichel.innerHTML = e.which;
locationel.innerHTML = "General keys";
if (e.location === 0) locationel.innerHTML = "General keys";
if (e.location === 3) locationel.innerHTML = "Numpad";

});