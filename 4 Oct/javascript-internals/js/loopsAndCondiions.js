//loops


//repeat action or repeats the code multiple times


//while loop

// while (condition){
//     //code
//     //loop body
// }

// let i = 0;

// while (i < 3) {
//     console.log(i);
//     i++
// }

// let i = 3;

// while (i) {
//     console.log(i);
//     i--;
// }


// do{

// }while(condition)

// let i = 0;

// do {
//     console.log(i);
// } while (i > 3);


//for loop

// for(start; condition; step){
//     //loop body
// }

//start => once when u r entering the loop

//condition => checked on every iteration

//loop body => runs again and adain if the condition is truthy

//step => executes after the body on each iteration

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let i = 0;

// for (i = 0; i < 5; i++) {
//     console.log(i);
// }


// let i = 0;

// for (; i < 5; i++) {
//     console.log(i);
// }

// let i = 0
// for (; ;) {
//     console.log(i)
//     i++
// }

//breaking the loop

// let total = 0;

// while (true) {

//     let value = +prompt('Enter an integer', '');
//     console.log('value', !value)
//     if (!value) break;

//     total = total + value
// }

// console.log('total:', total)



// for (let i = 0; i < 10; i++) {

//     if (i % 2 == 0) continue;

//     console.log(i);
// }


//switch case

//take the input from the user

let userInput = prompt('Choose any option: 1 - View Profile, 2 - Edit Profile, 3 - Logout');

//convert the user input to a number
// console.log(typeof parseInt(userInput))
let choice = parseInt(userInput);


//perform some actions based on user's choice using a switch statement

// switch (choice) {
//     case 1:
//         console.log('Viewing profile...');
//         break;
//     case 2:
//         console.log('Editing profile...');
//         break;
//     case 3:
//         console.log('Logging out...');
//         break;

//     default:
//         console.log('Invalid Choice. Please choose a valid option')
// }

//implement with if else

if (choice === 1) {
    console.log('Viewing profile...');
} else if (choice === 2) {
    console.log('Editing profile...');
} else if (choice === 3) {
    console.log('Logging out...');
} else {
    console.log('Invalid Choice. Please choose a valid option')
}


// switch (choice) {

//     case 1:
//     case 2:
//         console.log('Editing profile...');
//         break;

//     case 3:
//         console.log('Logging out...');
//         break;

//     default:
//         console.log('Invalid Choice. Please choose a valid option')
// }

