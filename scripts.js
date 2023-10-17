//adjust grid

function changeGrid() {

    var currContainer = document.querySelector('#container');
    var currBoxes = document.querySelectorAll('.bx');

        while (currContainer.hasChildNodes()) {
            currContainer.removeChild(currContainer.firstChild);
        }

    var gridSize = prompt("Enter number of squares per side.", "max 100");
    
        if(gridSize > 100) {
            changeGrid();
        }       
    
    var pxSize = 960/gridSize;
    console.log(pxSize);

    var newWidth = (pxSize - 1.6) + "px";
    console.log(newWidth);
   
    var numOfBoxes = gridSize * gridSize;
    console.log(numOfBoxes);

    for (i=0; i<numOfBoxes; i++) {

        var bigBox = document.querySelector('#container');

        var littleBox = document.createElement('div');
        littleBox.setAttribute('class', 'bx');

        bigBox.appendChild(littleBox);

        const boxing = document.querySelectorAll('.bx');

        boxing.forEach((bx) => {
            bx.style.width = newWidth;
            bx.style.height = newWidth;
           });

    }

        const tch2 = document.querySelectorAll('.bx');

         const colourSelect = ["blue", "red", "yellow", "purple", "orange", "green"];
            console.log(colourSelect);

         whichColour = Math.floor(Math.random() * 6);
            console.log(whichColour);

        tch2.forEach((bx) => {
             bx.addEventListener('mouseover', function(e){
             e.target.style.background = colourSelect[whichColour];
             });
        });


};