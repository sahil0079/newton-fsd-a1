
//event delegation


const categories = document.querySelector('#categories');


// categories.addEventListener('click', function (e) {
//     console.log(e.target.id);

//     window.location.href = '/' + e.target.id;
// })


categories.addEventListener('click', function (e) {
    if (e.target.tagName == 'LI') {
        window.location.href = '/' + e.target.id;
    }
})