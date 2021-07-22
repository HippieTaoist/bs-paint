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
const gridWidth = 50;
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
let Gchoice = 0
    // Set Pallette
function setPalette(choice) {
    // everWhite.style.backgroundColor = 'white';
    if (Gchoice === 0) {
        Gchoice = 1
    }
    if (Gchoice === 1) {

        style.innerHTML = `
            .color-1 { background-color: red }
            .color-2 { background-color: orange}
            .color-3 { background-color: yellow }
            .color-4 { background-color: green }
            .color-5 { background-color: blue }
            .color-n { background-color: white}
`;
    }
    if (Gchoice === 2) {

        style.innerHTML = `
            .color-1 { background-color: #faaa0b}
            .color-2 { background-color: #705a44}
            .color-3 { background-color:  #160a05}
            .color-4 { background-color: #9c3404 }
            .color-5 { background-color: #681804 }
            .color-n { background-color: white}
`;
    }



}
document.head.appendChild(style);


let changePalette = document.querySelector('.palette-icon')

// // grab the choice number from selection
changePalette.addEventListener('click', function(e) {
    if (Gchoice === 2) {
        Gchoice = 1
        setPalette(Gchoice)
        console.log('Gchoice2 clicked');
    } else {
        Gchoice = 2;
        setPalette(Gchoice)
        console.log('Gchoice1 clicked');
    }
});







setPalette(Gchoice)

// ==================================
// =====PALETTE COLOR TRANSFERS======
// ==================================

// Connect currentPaintColor to  .current-brush
let currentPaintColor = document.querySelector('.current-brush')
console.log('currentPaintColor: ', currentPaintColor)

// Connect colorChoice to .palette-color
let colorChoice = document.querySelector('.palette')

let currentColor = 'white'
colorChoice.addEventListener('click', function(event) {
    currentPaintColor.className = ('current-brush')
    let tempPaint = event.target
    let tempPaintNum = tempPaint.className[tempPaint.className.length - 1]
    currentColor = `color-${tempPaintNum}`
    currentPaintColor.classList.add(currentColor)
    console.log('currentPaintColor: ', currentPaintColor)

});


// ==================================
// =====CANVAS SETUP & PAINT IT======
// ==================================

// Paint on Canvas
let canvas = document.querySelector('.canvas')
let square = document.querySelectorAll('.square')

// on/Off Selectoring
let mouseIsDown = 0

//capture paint area to manipulate
canvas.addEventListener('mouseenter', function(e) {

    // change cursor in canvas
    document.body.style.cursor = 'url(cursor.cur), auto';

    // write to each square
    square.forEach(function(square) {

        // clear square as entered - bug fix persistent border remainant
        square.addEventListener('mouseenter', function(e) {
            square.style.border = 'none'
        });

        // clear square as exited - bug fix persistent border remainant
        square.addEventListener('mouseleave', function(e) {
            square.style.border = 'none'
        });

        // listen for mousedown  event and apply color && border feature
        square.addEventListener('mousedown', function() {
            mouseIsDown = 1
            square.classList.replace(square.classList[1], currentColor)
            square.style.border = 'black 5px solid'
        })

        // continue with coloring if the mouse remains down.
        square.addEventListener('mousemove', function() {
            if (mouseIsDown === 1) {
                square.classList.replace(square.classList[1], currentColor)
                square.style.border = 'black 5px solid'
            } else { square.style.border = 'none' }

        })

        // stop drawing on mouse release
        square.addEventListener('mouseup', function() {
            // let mouseIsDown = square.classList.toggle('mouse-is-down');
            mouseIsDown = 0
        })
    })

    // return  cursor to normal when leaving canvas
    canvas.addEventListener('mouseleave', function() {
        document.body.style.cursor = 'default'
    })
})