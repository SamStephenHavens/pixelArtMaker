// Select color input
let color = document.getElementById('pixelColor');

// Get Dimensions element
let dimensions = document.getElementById('pixelSize')

//Get design canvas element
let body = document.getElementById('pixelCanvas')

// Get length element
let length =  document.getElementById('pixelLength').value;

// Get breadth element
let breadth = document.getElementById('pixelBreadth').value;

// Query submit button
let submit = document.querySelector('input[type="submit"]')

// When size is submitted by the user, call makeGrid()
dimensions.addEventListener('submit', function(event){
  let length = document.getElementById('pixelLength').value;
  let breadth = document.getElementById('pixelBreadth').value;
  let body = document.getElementById('pixelCanvas');
  
  //Adding Event to prevent default submission
  event.preventDefault();
  makeGrid(length, breadth);
});

function makeGrid(length, breadth) {

  body.innerHTML = null;

  for(alpha = 0; alpha < length; alpha++){
    let row = body.insertRow(alpha);
    for(beta = 0; beta < breadth; beta++){
      let cell = row.insertCell(beta);

      //Event listener change to user selected color to pixels
      cell.addEventListener('click', function(event){
        cell.style.backgroundColor = color.value
      })
    }
  }
};