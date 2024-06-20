
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
