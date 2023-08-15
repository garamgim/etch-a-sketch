

// Making a 16 x 16 pallete

const containerDiv = document.querySelector('.grid-container');

let gridNum = 16;
let pencilColor = '#a7a790';

for (let i = 1; i <= gridNum * gridNum; i++) {

    let div = document.createElement('div');
    div.className = 'grid-child';
    div.setAttribute('id', `${i}`);
    containerDiv.appendChild(div);

    div.addEventListener('mouseenter', (e) => {
        if (drawing === true) {
            e.target.style.backgroundColor = pencilColor;
        }
    });
}


// Drawing toggle

let drawing = false;

document.addEventListener('mousedown', () => { drawing = true; });
document.addEventListener('mouseup', () => { drawing = false; });

//토글 개념 사용, https://stackoverflow.com/questions/48593312/javascript-event-when-mouseover-and-mousedown