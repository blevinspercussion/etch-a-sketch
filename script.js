const container = document.querySelector('.container');
const clearButton = document.querySelector('.btn-clear');
const sizeButton = document.querySelector('.btn-size');

let gridSize = 16;

// function drawSquares(gridSize, container) {
//     for (i = 0; i < gridSize; i++) {
//         container.setAttribute('grid-template-columns', `repeat${gridSize}, 1fr`);
//         // container.setAttribute('grid-template-rows', `repeat${gridSize}, 1fr`);
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('cell');
//         container.appendChild(newDiv);
//     }
// }

function drawSquares(gridSize, container) {
    document.getElementById('grid').style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    document.getElementById('grid').style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    
    for (i = 0; i < gridSize * gridSize; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('cell');
        container.appendChild(newDiv);
    }

}

// function drawSquares(gridSize, div) {
//     console.log(div)
//     div.setAttribute('grid-template-columns', `repeat${gridSize}, 1fr`);
//     div.setAttribute('grid-template-rows', `repeat${gridSize}, 1fr`);
//     for (i = 0; i < gridSize; i++) {
//         for (j = 0; j < gridSize; j++) {
//             let newDiv = document.createElement('div');
//             newDiv.classList.add('cell');
//             newDiv.classList.add('cell' + i + j)
//             div.appendChild(newDiv);
//         }
//     }
// }

// function drawSquares(gridSize) {
//     for (i = 0; i < gridSize; i++) {
//         for (j = 0; j < gridSize; j++) {
//             let newDiv = document.createElement('div');
//             newDiv.classList.add('cell');
//             newDiv.classList.add('cell' + i + j);
//             // newDiv.style.flexBasis = 
//             container.appendChild(newDiv);
//         }
//     }

// }

drawSquares(gridSize, container);


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