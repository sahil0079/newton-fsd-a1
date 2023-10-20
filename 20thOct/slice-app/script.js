

//variabless
const boxesContainer = document.getElementById('boxContainer');
const button = document.getElementById('button');


//events section

button.addEventListener('click', function () {
    boxesContainer.classList.toggle('bigBox');
})





//function section


function createBoxes() {

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const singleBox = document.createElement('div');
            // console.log(singleBox)
            singleBox.className = 'box';
            singleBox.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`

            boxesContainer.append(singleBox);
        }
    }
}

createBoxes();