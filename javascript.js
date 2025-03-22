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

interface.appendChild(chooseNewGrid);