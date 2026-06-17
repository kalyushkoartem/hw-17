const inputRef = document.querySelector("#input");
const btnRef = document.querySelector("#btn");
btnRef.textContent = inputRef.value;

const picRef = document.querySelector('[alt="crazy frog"]');
picRef.src = "https://alchetron.com/cdn/crazy-frog-7a251fd2-bf54-4bc6-9926-80d1cb5a1fd-resize-750.jpg";

const linkRef = document.querySelector(".link");
const imgRef = document.querySelector(".img");
linkRef.href = "https://www.play-games.com/crazy-frog-games.html";
imgRef.alt = "frog";

const itemRef = document.querySelector(".item");
itemRef.textContent = 52