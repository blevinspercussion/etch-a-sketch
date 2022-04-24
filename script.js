const canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function drawSquares() {
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            ctx.beginPath();
            ctx.rect(10 + (i * 50), 10 + (j * 50), 50, 50);
            ctx.stroke();
        }
    }
}

drawSquares();