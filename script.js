// const container = document.querySelector('.container');
const clearButton = document.querySelector('.btn-clear');
const sizeButton = document.querySelector('.btn-size');

let gridSize = 32;



// Draw the grid

function drawSquares(gridSize) {
    if (document.getElementById('grid') != null) {
        document.getElementById('grid').remove();
    }
    const container = document.createElement('div');
    container.setAttribute('id', 'grid');
    container.setAttribute('class', 'container')
    document.body.appendChild(container);
    document.getElementById('grid').style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    document.getElementById('grid').style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    // cells = document.querySelectorAll('cell');
    // cells.forEach(cell => {cell.remove();});
    
    for (i = 0; i < gridSize * gridSize; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('cell');
        container.appendChild(newDiv);
    }

}

// Add event listeners

function addCellListeners() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add('hilight');
        });
        cell.addEventListener('click', () => {
            cell.classList.remove('hilight');
        });
    });

    clearButton.addEventListener('click', () => {
        cells.forEach(cell => {
            cell.classList.remove('hilight');
        });
    });

}


sizeButton.addEventListener('click', () => {
    gridSize = prompt("Please enter your preferred grid size: ")
    drawSquares(gridSize);
    addCellListeners();

})

drawSquares(gridSize);
addCellListeners();


// const canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// function drawSquares() {
//     for (i = 0; i < 16; i++) {
//         for (j = 0; j < 16; j++) {
//             ctx.beginPath();
//             ctx.rect(10 + (i * 50), 10 + (j * 50), 50, 50);
//             ctx.stroke();
//         }
//     }
// }

// drawSquares();