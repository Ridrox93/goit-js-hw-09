const buttonStartEl = document.querySelector('[data-start]');
const buttonStoptEl = document.querySelector('[data-stop]');
const bodyEL = document.querySelector("body");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};


let colorChanger = null;

buttonStartEl.addEventListener("click", ()=> {colorChanger = setInterval(() => {
    buttonStartEl.disabled = true;
    buttonStoptEl.disabled = false;
    bodyEL.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });

buttonStoptEl.addEventListener("click", () => {
    buttonStartEl.disabled = false;
    buttonStoptEl.disabled = true;
    bodyEL.style.backgroundColor = "transparent";
    clearInterval(colorChanger);
    });



