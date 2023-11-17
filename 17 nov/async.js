

//psuedo code
//Synchronous javascript model
// function displayUiData(data) {
//     console.log(data);
// };
// const dataFromAPI = fetchAndWait('https://linkedin.com/john/posts/1');

// //assume fetchAndWait is taking 300ms
// //user can do nothing for 300ms 
// displayUiData(dataFromAPI);

// console.log('data displayed');


//Problem
//blocks the running of further code while the task completes

//benefit
//u can understand the code easily 


//Solution
//it should be able to do tasks that takes long time to complete
//for ex => fetching data from the server


//Continue running our javascript code line by line without one long task blocking the further javascript execution

//when the slow tasks completes, we should be able to run the functionality somehow knowing that task is done and now the data is ready


//async execution
//ES5 solution callback functions with web apis
function greetings() {
    console.log('Hello');
};

setTimeout(greetings, 1000);

console.log("Bye");