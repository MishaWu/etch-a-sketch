const container = document.querySelector("div#container");
const interface = document.querySelector("div#interface");

function createGrid(num) {
    let oneGrid = 500 / (num);
    for (let i = 1; i <= num * num; i++) {
            const gridPanel = document.createElement("div");
            gridPanel.setAttribute("class", "grid");
            gridPanel.style.border = "0.5px solid blue";
            gridPanel.style.height = oneGrid  + "px";
            gridPanel.style.width = oneGrid + "px";
            container.appendChild(gridPanel);
    }
    
    let gridPanel = document.querySelectorAll("div.grid");
    gridPanel.forEach((grid) => {
        grid.addEventListener('mouseover', () => grid.style.backgroundColor = "black");
        grid.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            grid.style.backgroundColor = "white";
        })
    });
}

let gridPanel = document.querySelectorAll("div.grid");

const chooseNewGrid = document.createElement("button");

chooseNewGrid.addEventListener("click", () => {
    const newNumber = prompt("Enter from 1 to 100");
    let gridPanel = document.querySelectorAll("div.grid");
    gridPanel.forEach((grid) => {
        grid.remove();
    });
    createGrid(newNumber);
})

chooseNewGrid.textContent = "New Grid";
interface.appendChild(chooseNewGrid);

const eraser = document.createElement("button");
eraser.textContent = "Eraser";

eraser.addEventListener("click", () => {
    gridPanel.forEach((grid) => {
        grid.removeEventListener('mouseover', () => grid.style.backgroundColor = "black");
        grid.addEventListener('mouseover', () => grid.style.backgroundColor = "white");
    });
})

interface.appendChild(eraser);

const draw = document.createElement("button");
draw.textContent = "Draw";

draw.addEventListener("click", () => {
    gridPanel.forEach((grid) => {
        grid.removeEventListener('mouseover', () => grid.style.backgroundColor = "white");
        grid.addEventListener('mouseover', () => grid.style.backgroundColor = "black");
    });
})

interface.appendChild(draw);

createGrid(16);

const RGB = document.createElement("button");
RGB.textContent = "RGB";

RGB.addEventListener("click", () => {
    gridPanel.forEach((grid) => {
        grid.removeEventListener('mouseover', () => grid.style.backgroundColor = "white");
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        grid.addEventListener('mouseover', () => grid.style.backgroundColor = "#" + randomColor);
    });
})

interface.appendChild(RGB);

