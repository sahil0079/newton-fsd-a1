
// factorial(4) =  4* factorial(3)
// factorial(3) = 3 * factorial(2)
// factorial(2) = 2 * factorial(1)
// factorial(1) = 1
//closures
// var startTime = performance.now()
// factorial(4000) // <---- measured code goes between startTime and endTime
// var endTime = performance.now()

// console.log(`Call to factorial took ${endTime - startTime} milliseconds`)


function factorial(n) {

    if (n <= 1) {
        return 1;
    };
    return n * factorial(n - 1);
}


// console.log(factorial(150));
// console.log(factorial(150));
// console.log(factorial(150));

// console.log(factorial(150));
// console.log(factorial(150));
// console.log(factorial(150));

function square(num) {

    let result = 0;
    for (let i = 1; i <= num; i++) {

        for (let j = 1; j <= num; j++) {
            result++
        }
    }
    return result;
}

// function memoize(func) {
//     //variable environment
//     const cache = {};
//     return function (key) {

//         // console.log('func', func)
//         // console.log('key', key)

//         if (cache[key]) {
//             return cache[key];
//         } else {
//             const result = func(key);
//             cache[key] = result;
//             return result;
//         }
//     }
// }


function memoizeMap(func) {

    const cache = new Map();
    // debugger
    return function (key) {

        if (cache.has(key)) {
            console.log(`Fetching from cache: ${key}`);
            return cache.get(key);
        } else {
            console.log(`Calculating result for: ${key}`);
            const result = func(key);
            cache.set(key, result);
            return result;

        }

    }
}

// const memoizedSquare = memoize(square);
const memoizedSquare = memoizeMap(square);

memoizeMap(square)(30000);

console.log(memoizedSquare(30000));
console.log(memoizedSquare(40000));
console.log(memoizedSquare(50000));

console.log(memoizedSquare(30000));
console.log(memoizedSquare(40000));
console.log(memoizedSquare(50000));

console.log(memoizedSquare(30000));
console.log(memoizedSquare(40000));
console.log(memoizedSquare(50000));




// console.log(square(30000));
// console.log(square(40000));


// console.log(square(30000));
// console.log(square(40000));


// console.log(square(30000));
// console.log(square(40000));

// const memoizedFunction = memoize(factorial);
// console.log(memoizedFunction(100));
// console.log(memoizedFunction(200));
// console.log(memoizedFunction(100));
// console.log(memoizedFunction(100));
// console.log(memoizedFunction(100));
// console.log(memoizedFunction(100));
// console.log(memoizedFunction(100));






