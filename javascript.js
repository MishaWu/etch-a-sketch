const container = document.querySelector("div#container");
const interface = document.querySelector("div#interface");

function createGrid(num) {
    let oneGrid = 500 / (num);
    for (let i = 1; i <= num * num; i++) {
            const gridPanel = document.createElement("div");
            gridPanel.setAttribute("class", "grid");
            gridPanel.style.border = "0.5px solid black";
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

createGrid(16);

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
    let gridPanel = document.querySelectorAll("div.grid");
    gridPanel.forEach((grid) => {
        grid.addEventListener('mouseover', () => grid.style.backgroundColor = "white");
    });
})

interface.appendChild(eraser);

const draw = document.createElement("button");
draw.textContent = "Draw";

draw.addEventListener("click", () => {
    let gridPanel = document.querySelectorAll("div.grid");
    gridPanel.forEach((grid) => {
        grid.addEventListener('mouseover', () => grid.style.backgroundColor = "black");
    });
    console.log("huh");
})

interface.appendChild(draw);



const RGB = document.createElement("button");
RGB.textContent = "RGB";

RGB.addEventListener("click", () => {
    let gridPanel = document.querySelectorAll("div.grid");
    gridPanel.forEach((grid) => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        grid.addEventListener('mouseover', () => grid.style.backgroundColor = "#" + randomColor);
    });
})

interface.appendChild(RGB);

const shadeColor = document.createElement("button");
shadeColor.textContent = "Shading";

shadeColor.addEventListener("click", () => {
    let gridPanel = document.querySelectorAll("div.grid");
    gridPanel.forEach((grid) => {
        grid.addEventListener('mouseover', () => grid.style.backgroundColor = "black");
        let opacity = parseFloat(grid.style.opacity);
        grid.addEventListener('mouseover', () => grid.style.opacity = +grid.style.opacity + 0.1);
    });
})

interface.appendChild(shadeColor);

//