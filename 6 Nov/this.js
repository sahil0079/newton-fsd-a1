
//depends upon how u call a function

//1st default way of calling function
// console.log(this)
// function x() {
//     function y() {
//         console.log(this);

//     }
//     y()
//     console.log(this);
// }

// x();


//2 way of calling a function
//implicit binding

// var masterclass = {
//     teacher: 'John',
//     askQuestion(question) {
//         console.log(this)
//         console.log(this.teacher, question)
//     }
// }

// masterclass.askQuestion('What is implicit binding in js ?');

// var user = {
//     name: 'John',
//     getName() {
//         console.log(this.name)
//     }
// }

// user.getName();



// var masterclass = {
//     teacher: 'John',
//     askQuestion(question) {
//         function x() {
//             //this for fucntion x
//             console.log(this)
//         }
//         x()
//         //this for fucntion askQuestion

//         console.log(this)
//         // console.log(this.teacher, question)
//     }
// }

// masterclass.askQuestion('What is implicit binding in js ?');



// function askQuestion(question) {
//     console.log(this.teacher, question)
// };

// var masterclass1 = {
//     teacher: 'John',
//     askQuestion: askQuestion
// };

// var masterclass2 = {
//     teacher: 'Peter',
//     askQuestion: askQuestion
// }

// masterclass1.askQuestion('How to share this function?');
// askQuestion('How to share this function?');
// masterclass2.askQuestion('How to share this function?');


//3rd way of calling a function
//explicit binding



// function askQuestion(q) {
//     console.log(this.teacher, q);
// };

// var masterclass1 = {
//     teacher: 'John',
// }

// var masterclass2 = {
//     teacher: 'Peter',
// }

// askQuestion.call(masterclass1, 'Is it possible to explicitly set the this context');
// askQuestion.call(masterclass2, 'Is it possible to explicitly set the this context');


//4th way of calling a function
//constructor calls


// function askQuestion(t, q) {
//     this.teacher = t
//     console.log(this.teacher, q);
// };

// var newEmptyObject = new askQuestion('John', 'What is new keyword doing her?');


// //new keyword
// //create a brand new object
// //create a link to another object
// //returns an object


//default binding

// var teacher = 'john';

// function askQuestion(q) {
//     console.log(this.teacher, q)
// };

// function askQuestionAgain(q) {
//     'use strict'
//     console.log(this.teacher, q)
// };

// askQuestion('Whats the non strict mode by default?');
// askQuestionAgain('Whats the strict mode by default?');


// var masterclass = {
//     teacher: 'john',
//     askQuestion(q) {
//         function x() {
//             console.log(this.teacher, q);
//         }
//         x()
//     }
// }
// masterclass.askQuestion('What is this binding??')



// var masterclass = {
//     teacher: 'john',
//     askQuestion(q) {
//         var x = () => {
//             console.log(this.teacher, q);
//         }
//         x()
//     }
// }
// masterclass.askQuestion('What is this binding??')