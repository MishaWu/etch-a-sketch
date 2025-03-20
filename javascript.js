const container = document.querySelector("div");

function createGrid(num) {
    for (let i = 1; i < num; i++) {
        const gridPanel = document.createElement("div");
        gridPanel.style.border = "thick dashed blue";
        container.appendChild(gridPanel);
    }
}
createGrid(16);