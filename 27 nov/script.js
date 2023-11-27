//debounce is a technique used to limit function calls

//ecomm website
//searching for products

//onchange call function getProducts(searchTerm)
//user is searching for iphone

//input => i  => api call to get results starting with i  => 1 function call
//input => ip  => api call to get results starting with ip => 2 function call
//input => iph  => api call to get results starting with iph => 3 function call

//for 1 user 
// iphone 15 => 9 function calls


//1 million users
// iphone 15 => 9 function calls * 1 million = 9 million api calls

//idealy to optimize
//if quickly typing within a time iphone 15 it 1 api call should happen

//debounce is a technique used to limit function calls

//if the difference between to consecutive function calls exceeds a particular time only then make a function call

//difference between to consecutive function calls => 500ms

//iphone 15 => 600ms => 1 api call

//i => 500ms => 1 api call
//ip  => 2 api call



//use case 2

//button => on click it makes a api call to getOrders
//button is clicked 5 times => 5 api calls
//put debounce of 500ms
//button 10 times < 500ms after releasing the last button u pause > 500ms => 1api call

//throttling is a technique used to limit function calls only during a particular delay

//timer 300ms
//button => at 250ms we have click 10 times

//at 300ms => one api call is being made

//at 400ms => have clicked 5 times
//at 600ms => one api call is being made

//throttling limits the rate at rhich function can be called
//it ensures the the function is called at most once in a specified time interval;


//thunk fucntion

//encapsulates the code and delay the evaluation of an expression or conputation
//they are essentionally fucntions that dont take any arguments but return
//a value when invoked

// function createThunk(num1, num2) {
//     return function () {
//         return num1 + num2;
//     }
// }

// const defferedAddition = createThunk(10, 20);

// const result = defferedAddition();

// console.log(result)

// const thunk = require('thunks');

// console.log(thunk)