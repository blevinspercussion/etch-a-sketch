// const container = document.querySelector('.container');
const clearButton = document.querySelector('.btn-clear');
const sizeButton = document.querySelector('.btn-size');
const gridButton = document.querySelector('.btn-grid-toggle');
const slider = document.querySelector('.slider');
const colorPicker = document.querySelector('.color-picker');

const sliderValue = document.querySelector('.slider-value');


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
        newDiv.classList.add('cell-border');
        container.appendChild(newDiv);
    }

}

// Add event listeners

slider.addEventListener('input', () => {
    gridSize = slider.value;
    document.querySelector('.grid-size-output').textContent = `Grid size: ${gridSize}`;
    drawSquares(gridSize);
    addCellListeners();
});

function addCellListeners() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            cell.classList.add('hilight');
        });
        // cell.addEventListener('drag', () => {
        //     cell.classList.remove('hilight');
        // });
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

gridButton.addEventListener('click', () => {
    cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.toggle('cell-border');
    })
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

