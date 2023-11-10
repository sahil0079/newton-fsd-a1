//closures


// function outer() {
//     let counter = 0;

//     function incrementCounter() {
//         counter++;
//         debugger
//         console.log(counter);
//     }

//     return incrementCounter;
// }

// const newFunction = outer();
// newFunction();
// newFunction();



//that a particular function can only be called once

function once(func) {
    let hasBeenCalled = false;
    let result;
    return function (...args) {

        if (!hasBeenCalled) {
            result = func(...args);
            hasBeenCalled = true
        }

        debugger

        return result;

    }
}
const addOnce = once((a, b) => {
    console.log(`Adding ${a}, ${b}`);
    return a + b;
});
console.log(addOnce(2, 3));
console.log(addOnce(10, 20));