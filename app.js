


// Initialize

let containerDiv = document.querySelector('.grid-container');
let gridDivs = document.querySelectorAll('.grid-child');
let pencilColor = '#a7a790';

makeGrid(16);



// Grid making function

function makeGrid(num) {
    for (let i = 1; i <= num * num; i++) {

        let div = document.createElement('div');
        div.className = 'grid-child';
        div.setAttribute('id', `${i}`);
        div.style.flex = `calc(70vh / ${num})`;
        containerDiv.appendChild(div);

        div.addEventListener('mouseenter', (e) => {
            if (drawing === true) {
                e.target.style.backgroundColor = pencilColor;
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



// Refresh button

const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', () => {
    gridDivs.forEach(grid => grid.style.backgroundColor = '#f9f9e1');
});