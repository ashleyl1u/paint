let gridSize=16;
let selectedColor= 'lightblue';

renderGrid();
function renderGrid () {
  let html=``;
  for(let r =0; r<gridSize; r++){
    const rowDiv= document.createElement('div');
    rowDiv.classList.add('row');
    
    for(let c=0; c<gridSize; c++){
      const columnDiv = document.createElement('div');
      columnDiv.classList.add('square');
      rowDiv.appendChild(columnDiv);
      
    }

    document.querySelector('.grid').appendChild(rowDiv);
    
  }
}

addListeners ();
function addListeners () {
  let mousedown = false;
  document.querySelectorAll('.square').forEach((element) => {
    element.addEventListener('mousedown', () => {
      mousedown=true;
      changeBackgroundColor (element);
    });
  });
  
  document.querySelectorAll('.square').forEach((element) => {
    element.addEventListener('mouseup', () => {
      mousedown=false;
    });
  });
  
  document.querySelectorAll('.square').forEach((element) => {
    element.addEventListener('mouseover', () => {
      if(mousedown === true){
        changeBackgroundColor(element);
      }
    });
  });
}



function changeBackgroundColor (element) {
  element.style.backgroundColor= selectedColor;
}


//changing grid size 
document.querySelector('.grid-size-button').addEventListener('click', () => {
  const gridSizeValue = document.querySelector('.grid-size-input').value;
  if(gridSizeValue !== ''){
    gridSize=gridSizeValue;
    clearGrid();
    document.querySelector('.grid-size-input').value=''; //clearing the input value
  }
});


function clearGrid(){
  document.querySelector('.grid').innerHTML =``; //clearing the grid div
  renderGrid();
  addListeners ();
}

document.querySelector('.clear-button').addEventListener('click', () => {
  clearGrid();
});

let eraser=false;
document.querySelector('.eraser-button').addEventListener('click', () => {
  if(eraser === false){
    selectedColor= 'white';
    eraser=true;
  }
  else{
    selectedColor= 'lightblue';
    eraser=false;
  }
  
});

