/*******************
 * OUR HELPER CODE *
 *******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
    const canvas = document.querySelector('.canvas');
    const div = document.createElement('div');
    div.className = 'square everWhite';
    canvas.appendChild(div);
    count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
 ***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)



/****************************
 * EVENT LISTENER FUNCTIONS *
 ****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
 * WIRING IT ALL TOGETHER *
 **************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.


// ==================================
// =========FLEX IT UP===============
// ==================================

// Align .app in column
const app = document.querySelector('.app')
app.style.flexDirection = 'column'
    // app.style.border = 'red 3px solid'

// Align .headings in column format and center text within
const headings = document.querySelector('.headings')
headings.style.justifyContent = 'center'
headings.style.flexDirection = 'column'
headings.style.height = 'fit-content'
headings.style.margin = 'auto'
headings.style.textAlign = 'center'
    // headings.style.border = 'blue 3px solid'

// Align .paint palette based on colors && palette img is ofset to left.
const paint = document.querySelector('.paint')
paint.style.justifyContent = 'center'
paint.style.alignContent = 'space-evenly'
paint.style.flexDirection = 'column'
paint.style.margin = 'auto'
paint.style.height = 'fit-content'
    // paint.style.border = 'purple 3px solid'

// Align and center brush selection
const brushSelection = document.querySelector('.brush-selection')
brushSelection.style.justifyContent = 'center'
brushSelection.style.width = 'fit-content'
brushSelection.style.margin = 'auto'
brushSelection.style.flexDirection = 'column'
    // brushSelection.style.border = 'green 5px solid'

// center .palette in brush brushSelection
const palette = document.querySelector('.palette')
palette.style.justifyContent = 'center'
    // palette.style.border = 'black 3px solid'

// Center brush icon in brushSelection
const brush = document.querySelector('.brush')
brush.style.justifyContent = 'center'
    // brush.style.border = 'black 3px solid'

// Center canvas to app
const canvasDisplay = document.querySelector('.canvas')
canvasDisplay.style.justifyContent = 'center'
    // canvasDisplay.style.alignContent 
    // canvasDisplay.style.flexDirection = 'column'



// ==================================
// =========PALETTE COLORING=========
// ==================================

// Pallette Coloring
let palletBox1 = document.querySelector('.color-1')
let palletBox2 = document.querySelector('.color-2')
let palletBox3 = document.querySelector('.color-3')
let palletBox4 = document.querySelector('.color-4')
let palletBox5 = document.querySelector('.color-5')

const style = document.createElement('style');

// Set Pallette
function setPalette(choice) {
    // everWhite.style.backgroundColor = 'white';
    if (choice === 1) {

        style.innerHTML = `
            .color-1 { background-color: red; }
            .color-2 { background-color: orange; }
            .color-3 { background-color: yellow }
            .color-4 { background-color: green }
            .color-5 { background-color: blue }
`;
        // palletBox1.style.backgroundColor = 'red'
        // palletBox2.style.backgroundColor = 'orange'
        // palletBox3.style.backgroundColor = 'yellow'
        // palletBox4.style.backgroundColor = 'green'
        // palletBox5.style.backgroundColor = 'blue'

    }

}
document.head.appendChild(style);

function setColor(divToSet) {
    divToSet.backgroundColor = red
}
setPalette(1)


// ==================================
// =====PALETTE COLOR TRANSFERS======
// ==================================

// Connect currentPaintColor to  .current-brush
let currentPaintColor = document.querySelector('.current-brush')
console.log('currentPaintColor: ', currentPaintColor)

// Connect colorChoice to .palette-color
let colorChoice = document.querySelector('.palette')
console.log('colorChoice:', colorChoice)
console.log(palletBox1.style.backgroundColor)

let currentColor = 'white'
colorChoice.addEventListener('click', function(event) {
    currentPaintColor.className = ('current-brush')
    let tempPaint = event.target
    let tempPaintNum = tempPaint.className[tempPaint.className.length - 1]
    currentColor = `color-${tempPaintNum}`
    currentPaintColor.classList.add(currentColor)
    console.log('currentPaintColor: ', currentPaintColor)
});





// Paint on Canvas
let canvas = document.querySelectorAll('.canvas')
let square = document.querySelectorAll('.square')
console.log(square)
square.forEach(function(square) {
    square.addEventListener('click', function() {
        square.classList.replace('everWhite', currentColor)
    })

    square.addEventListener('mousedown', function() {
        square.classList.replace('everWhite', currentColor)
    })
});



// canvas.forEach((square, index) => {
//     square.addEventListener('click', function() { console.log(square, index) })
// })

// canvas.forEach(function(square, index) => {

//     canvas.addEventListener('click', function() {
//         console.log(square, index)
//     });
// });