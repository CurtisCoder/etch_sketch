//adjust grid

function changeGrid() {

    var currContainer = document.querySelector('#container');
    var currBoxes = document.querySelectorAll('.bx');

        while (currContainer.hasChildNodes()) {
            currContainer.removeChild(currContainer.firstChild);
        }

    var gridSize = prompt("Enter number of squares per side.", "grid size");
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

        tch2.forEach((bx) => {
             bx.addEventListener('mouseover', function(e){
             e.target.style.background = 'red';
             });
        });


};