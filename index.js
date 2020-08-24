const boxLength = 12,
    rowLength = 15,

    rowFolloingCplor = 255 / rowLength,
    boxFolloingCplor = 255 / boxLength;

function createMatrix() {
    const mainDiv = document.getElementById('grid');
    let grid = '<div class ',
        addRowColor = 0;
    for (let i = 0; i < rowLength; i++) {
        let row = '<div class="row">',
            addBoxColor = 0;
        for (let j = 0; j < boxLength; j++) {
            row = row + `<div class="box" title="RGB (0, ${addRowColor <= 255 ? Math.round(addRowColor) : 255}, ${addBoxColor <= 255 ? Math.round(addBoxColor) : 255})" style="background-color:rgb(0, ${addRowColor <= 255 ? Math.round(addRowColor) : 255}, ${addBoxColor <= 255 ? Math.round(addBoxColor) : 255})"></div>`;
            addBoxColor += boxFolloingCplor;
        }
        grid = grid + row + '</div>';
        addRowColor += rowFolloingCplor;
    }
    mainDiv.innerHTML = grid;
}

createMatrix();