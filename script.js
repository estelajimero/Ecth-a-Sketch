var cellsColor = ['black'];

const gridContainer = document.getElementById('grid-container');

//GRID
function createGrid(gridSize) {
    for (i = 0; i < gridSize * gridSize; i++) {
        let gridItem = document.createElement('div');

        gridItem.addEventListener('mouseenter', e =>  {
            if (gridItem.style.background == '') {
                gridItem.style.background = cellsColor[Math.floor(Math.random() * cellsColor.length)];
            }
        });

        gridContainer.appendChild(gridItem).className = 'grid-item';
    }

    gridContainer.style.gridTemplateColumns = 'repeat(' + gridSize + ', 30px)';
    gridContainer.style.gridTemplateRows= 'repeat(' + gridSize + ', 30px)';
}

createGrid(16);

//EVENTS
function OnMouseEnter(element) {
    element.style.background = color;
}

//Clear button
const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', e => {
    let cells = gridContainer.childNodes;

    for (i = 0; i < cells.length; i++) {
            cells[i].style.background = 'white';
    }
});

//New button
const newBtn = document.getElementById('new');

newBtn.addEventListener('click', e => {
    gridContainer.innerHTML = ''
    const gridSize = prompt("Pick the size of your grid");

    createGrid(gridSize);
})

//Color button
const colorBtn = document.getElementById('color');

colorBtn.addEventListener('click', e => {
    if(cellsColor.length == 1) {
        cellsColor = ['#d699ff', '#ff99d4', '#ff999c', '#99dbff', '#99ffd5', '#b6ff99', '#f8ff99', '#ffca99'];
    } else {
        cellsColor = ['black'];
    }
})

// Fonts Popup



