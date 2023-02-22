console.log("Cześć!");

let przyciskElement = document.querySelector(".button");
let zdjecieElement = document.querySelector(".picture");

przyciskElement.addEventListener("click", () => {
    zdjecieElement.remove();
})


let button = document.querySelector(".buttonBackground");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName")

button.addEventListener("click", () => {
    body.classList.toggle("dark");


    if (body.classList.contains("dark")) {
        themeName.innerText = "jasne";
    } else {
        themeName.innerText = "ciemne";
    }
});
