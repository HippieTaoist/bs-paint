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
    div.className = 'square color-5';
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



// =========FLEX IT UP=========
const app = document.querySelector('.app')
    // app.style.justifyContent = 'space-evenly'
    // app.style.alignContent = 'space-apart'
app.style.flexDirection = 'column'
app.style.border = 'red 3px solid'

const headings = document.querySelector('.headings')
headings.style.justifyContent = 'center'
headings.style.flexDirection = 'column'
headings.style.height = 'fit-content'
headings.style.margin = 'auto'
headings.style.textAlign = 'center'
headings.style.border = 'blue 3px solid'



const paint = document.querySelector('.paint')
paint.style.justifyContent = 'center'
paint.style.alignContent = 'space-evenly'
paint.style.flexDirection = 'column'
paint.style.margin = 'auto'
paint.style.height = 'fit-content'
paint.style.border = 'purple 3px solid'

const palette = document.querySelector('.palette palette-color')
palette.style.border = 'yellow 3px solid'
palette.style.justifyContent = 'center'

const brushSelection = document.querySelector('.brush-selection')
    // brushSelection.style.justifyContent = 'center'
    // brushSelection.style.alignContent = '
brushSelection.style.margin = 'auto'
brushSelection.style.flexDirection = 'column'
brushSelection.style.border = 'green 1px solid'

const canvasDisplay = document.querySelector('.canvas')
canvasDisplay.style.justifyContent = 'center'
canvasDisplay.style.alignContent = 'end'
    // canvasDisplay.style.flexDirection = 'column'






// Pallette Coloring
let palletBox1 = document.querySelector('.color-1')
let palletBox2 = document.querySelector('.color-2')
let palletBox3 = document.querySelector('.color-3')
let palletBox4 = document.querySelector('.color-4')
let palletBox5 = document.querySelector('.color-5')

// Set Pallette
function setPalette(choice) {
    if (choice === 1) {
        palletBox1.style.backgroundColor = 'red'
        palletBox2.style.backgroundColor = 'orange'
        palletBox3.style.backgroundColor = 'yellow'
        palletBox4.style.backgroundColor = 'green'
        palletBox5.style.backgroundColor = 'blue'

    }

}
setPalette(1)
let CurrentPaintColor = document.querySelector('.current-brush')


// Color Choice
let colorChoice = document.querySelector('.palette')
console.log(CurrentPaintColor)

colorChoice.addEventListener('click', function(event) {
    CurrentPaintColor.className = ('current-brush')
    let tempPaint = event.target
    let tempPaintNum = tempPaint.className[tempPaint.className.length - 1]
    CurrentPaintColor.classList.add(`.color-${tempPaintNum}`)
    console.log(CurrentPaintColor)
})
console.log(CurrentPaintColor)





// Paint on Canvas
let canvas = document.querySelector('.square')
console.log(canvas)



// canvas.forEach((square, index) => {
//     square.addEventListener('click', function() { console.log(square, index) })
// })

// canvas.forEach(function(square, index) => {

//     canvas.addEventListener('click', function() {
//         console.log(square, index)
//     });
// });