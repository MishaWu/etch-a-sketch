const container = document.querySelector("div");

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
}

createGrid(16);

let gridPanel = document.querySelectorAll("div.grid");
gridPanel.forEach((grid) => {
    grid.addEventListener('mouseover', () => grid.style.backgroundColor = "black");
});