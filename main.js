
renderGrid(16);
function renderGrid (size) {
  let html=``;
  for(let r =0; r<size; r++){
    const rowDiv= document.createElement('div');
    rowDiv.classList.add('row');
    
    for(let c=0; c<size; c++){
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
  element.style.backgroundColor= 'lightblue';
}


document.querySelector('.grid-size-button').addEventListener('click', () => {
  const gridSizeValue = document.querySelector('.grid-size-input').value;
  if(gridSizeValue !== ''){
    document.querySelector('.grid').innerHTML =``;
    renderGrid(gridSizeValue);
    addListeners ();
    document.querySelector('.grid-size-input').value='';
  }
});