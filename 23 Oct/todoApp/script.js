


//add todo

//variables
const form = getElement('addForm');

const todo = getElement('todo');

const todoList = getElement('todos')
//event listners

form.addEventListener('submit', addTodo)




//functions

function getElement(id) {
    return document.getElementById(id)
}

function addTodo(event) {
    event.preventDefault();
    // console.log(event)

    //get the user input

    const newTodo = todo.value;

    //create a new li element

    let li = document.createElement('li');

    //add the classes to the li

    li.className = "list-group-item d-flex justify-content-between";

    //add newtodo to the li

    li.innerText = newTodo;

    //create a delete button

    let deleteButton = document.createElement('button');

    //add the classes to the button

    deleteButton.className = "btn btn-danger btn-sm delete";

    //add text to the deleteButton

    deleteButton.innerText = 'delete';

    //append deleteButton to the li element

    li.append(deleteButton)

    //append li to the todoList

    todoList.append(li);

    todo.value = '';


}