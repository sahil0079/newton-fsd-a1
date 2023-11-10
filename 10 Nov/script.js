

//Function.call

//call apply and bind
//methods of functions's object version


//call

const user1 = {
    name: 'John',
    // greetings: function (city, age) {
    //     console.log(`Hello, ${this.name} from ${city} of age ${age} `);
    // }
}
// user1.greetings('Mumbai', 40);

function greetings(city, age) {
    console.log(`Hello, ${this.name} from ${city} of age ${age} `);
}
// greetings.call(user1, 'Mumbai', 40);

// greetings.apply(user1, ['Mumbai', 40]);


//bind
const boundFunctionUser1 = greetings.bind(user1, 'Mumbai', 40);

//100lines of code

const user2 = {
    name: 'Peter'
};

//call and apply
//function borrowing
// greetings.apply(user1, ['Delhi', 30]);

// greetings.call(user2, 'Delhi', 30);
const boundFunctionUser2 = greetings.bind(user2, 'Delhi', 30);


//200 liens of code

boundFunctionUser1();
boundFunctionUser2();
boundFunctionUser1();
boundFunctionUser2();