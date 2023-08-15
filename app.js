


// Initialize

let containerDiv = document.querySelector('.grid-container');
let pencilColor = '#a7a790';
let isRainbow = false

makeGrid(16);



// Grid making function

function makeGrid(num) {
    for (let i = 1; i <= num * num; i++) {

        let div = document.createElement('div');
        containerDiv.appendChild(div);

        div.className = 'grid-child';
        div.setAttribute('id', `${i}`);
        div.style.flex = `calc(60vh / ${num})`;

        div.addEventListener('mouseenter', (e) => {

            if (drawing === true && isRainbow === false) {

                e.target.style.backgroundColor = pencilColor;

            } else if (drawing === true && isRainbow === true) {

                e.target.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);;

            }

        });
    }
}



// Drawing toggle

let drawing = false;

document.addEventListener('mousedown', () => { drawing = true; });
document.addEventListener('mouseup', () => { drawing = false; });



// Slider value update

function updateInput(val) {
    containerDiv.innerHTML = '';
    makeGrid(val);
    document.getElementById('size').innerHTML = `${val} X ${val}`;
}




/* BUTTONS */

// Refresh button

const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', resetColor);

function resetColor() {
    let gridDivs = document.querySelectorAll('.grid-child');
    gridDivs.forEach(grid => { grid.style.backgroundColor = '#f9f9e1' });
}

// Pencil button

const pencilButton = document.getElementById('pencil');
pencilButton.addEventListener('click', () => {
    pencilColor = '#a7a790';
    isRainbow = false;
})

// Eraser button

const eraserButton = document.getElementById('eraser');
eraserButton.addEventListener('click', () => {
    pencilColor = '#f9f9e1';
    isRainbow = false;
})

// Rainbow button

const rainbowButton = document.getElementById('rainbow');
rainbowButton.addEventListener('click', () => {
    isRainbow = true;
})

// Palette

const palette = document.getElementById('color');
palette.addEventListener('input', () => {
    pencilColor = palette.value;
})
