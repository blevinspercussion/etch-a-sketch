const container = document.querySelector('.container');
const clearButton = document.querySelector('.btn-clear');


function drawSquares() {
    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('cell');
            newDiv.classList.add('cell' + i + j);
            container.appendChild(newDiv);
        }
    }

}

drawSquares();

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