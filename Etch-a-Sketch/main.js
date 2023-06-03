const containerDiv = document.querySelector('#container');

// here I need to create a row*auto string to set grid column
function repeatString(repeatIndex) {
    let repeatedResult = '';
    for (let i = 0; i < repeatIndex; i++) {
        repeatedResult += 'auto ';
    }
    return repeatedResult;
}

function createSquareDivs(side) {
    for (let i = 0; i < (side*side); i++ ) {
        const squareDiv = document.createElement('div');
        //squareDiv.style = 'border-style: solid';
        squareDiv.className = 'square';
        containerDiv.appendChild(squareDiv);
    }
}

function recieveNumberOfSides(){
    let numberOfSideReturn = Number(window.prompt('Enter Number of Sides'));
    if ( numberOfSideReturn > 0 && numberOfSideReturn <= 100) {
        return numberOfSideReturn;
    } else if (numberOfSideReturn <= 0 || numberOfSideReturn > 100) {
        alert('The number needs to be between 1 and 100');
        return recieveNumberOfSides();
    } else {
        alert('You can only enter a number');
        return recieveNumberOfSides();
    }
}

function addHoverListner() {
    // add a hovering event on the square div
    const squaresQuery = document.querySelectorAll('.square');
    const squares = Array.from(squaresQuery);

    squares.forEach((div) => {

        div.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = `rgb(${generateRandom()},
                                                ${generateRandom()},${generateRandom()})`;
        });

        div.addEventListener('mouseout', event => {
            event.target.style.backgroundColor = `rgb(${generateRandom()},
                                                ${generateRandom()},${generateRandom()})`;
        });
        
    });
}

const generateRandom = () => {
    return Math.floor(Math.random() * 256);
}

const removeChildren = (parent) => {
    while(parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}

/* ================== Main logic ========================*/

const body = document.querySelector('body');

// create a grid with column = row = 16
containerDiv.style = `grid-template-columns: ${repeatString(16)}`;
createSquareDivs(16);
addHoverListner();

// create a button before the container div
const getUserDefinedSizeBtn = document.createElement('button');
getUserDefinedSizeBtn.className = 'getter';
getUserDefinedSizeBtn.textContent = 'Submit Number of Side';
getUserDefinedSizeBtn.setAttribute('style', `margin-bottom: 30px; 
                                    padding: 10px; border-radius: 10px`);
body.insertBefore(getUserDefinedSizeBtn, containerDiv);

getUserDefinedSizeBtn.addEventListener('click', () => {
    removeChildren(containerDiv);
    const numberOfSide = recieveNumberOfSides();
    // create a grid with column = row = numberOfSide
    containerDiv.style = `grid-template-columns: ${repeatString(numberOfSide)}`;
    createSquareDivs(numberOfSide);
    addHoverListner();
});