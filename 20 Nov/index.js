

// function display(data) {
//     console.log(data)
// }

// const futureData = fetch('https://jsonplaceholder.typicode.com/posts/1');

// console.log('futureData', futureData)
// futureData.then(display);

// console.log(100);



function display(data) {
    console.log(data)
}
function greetings() {
    console.log('Hello')
}
function runFor1Sec() {
    //run for 1 sec
    const start = Date.now(); //current timestamp in milli seconds

    while (Date.now() - start < 1000) {
        //loop will run for approx 1 sec
    }
    console.log(200)
}


const futureData = fetch('https://jsonplaceholder.typicode.com/posts/1');

futureData.then(display);
runFor1Sec();
setTimeout(greetings, 0);
console.log(100);

