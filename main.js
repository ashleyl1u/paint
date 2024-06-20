
renderGrid();
function renderGrid () {
  let html=``;
  for(let r =0; r<16; r++){
    const rowDiv= document.createElement('div');
    rowDiv.classList.add('row');
    
    for(let c=0; c<16; c++){
      const columnDiv = document.createElement('div');
      columnDiv.classList.add('square');
      rowDiv.appendChild(columnDiv);
      
    }

    document.querySelector('.grid').appendChild(rowDiv);
    
  }
}

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


function changeBackgroundColor (element) {
  element.style.backgroundColor= 'lightblue';
}