//currying

// partial application of closures
// it is a fucntional programming technique used to transfom a function that takes multiple arguments into a sequence of functions

//multi argument function is converted  to series of single argument function

//process that involves breakingof a function that expects multiple arguments into a chain of functions 

//basic currying implementation
// function sum(a) {
//     return function (b = 0) {
//         return a + b
//     }
// }

// function sum(a) {
//     return function (b) {

//         if (b) {
//             return a + b

//         }
//         return a;
//     }
// }

//infinite arguments

function sum(a) {
    let result;
    return function (b) {

        if (b) {
            result = a + b;

            return sum(result);
            //again recursilvely checking for the next set of arguments

        }
        return a;
    }
}


console.log(sum(10)(20)(30)(40)(50)(60)());


// console.log(sum(10)(20));

// let anotherSum = sum(10);
// console.log(anotherSum(20))



//home work
// curry(1, 2, 9)(5, 8)(66, 7, 8, 9)(11, 2)();






