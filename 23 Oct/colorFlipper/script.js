

//selectors

//we need to pick the button element from the DOM

const colors = ['green', 'blue', 'red', 'brown', 'grey']; // range => 0 - colors.length
const btn = document.querySelector('#btn');
const span = document.querySelector('.color');



btn.addEventListener('click', function () {
    // alert('clicked');
    //we need to change the background 

    const randomIndex = getRandomNumber()
    console.log(randomIndex)

    document.body.style.backgroundColor = colors[randomIndex];
    span.textContent = colors[randomIndex];

});


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}




onclick  addEventListener