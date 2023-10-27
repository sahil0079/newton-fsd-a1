


//add todo

//variables
const form = getElement('addForm');

const todo = getElement('todo');

const todoList = getElement('todos');

const filter = getElement('filter');




//event listners

form.addEventListener('submit', addTodo);

//click event on delete

todoList.addEventListener('click', deleteTodo)

// console.log(todoList)
//keyup event

filter.addEventListener('keyup', searchTodo)


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

    //in then end input becomes empty
    todo.value = '';


}

//using event delegation
function deleteTodo(event) {
    // console.dir(event.target)

    const isDeleteButtonClicked = event.target.classList.contains('delete');

    // console.log(isDeleteButtonClicked)

    if (isDeleteButtonClicked) {
        // alert('delete cliked')

        let result = confirm('Are you sure ?');

        if (result) {
            console.log(event.target.parentElement)

            let li = event.target.parentElement;

            todoList.removeChild(li);
        }
    }


}

//homework edit functionlity


function searchTodo(event) {


    const searchText = event.target.value.toLowerCase();
    // console.log(searchText)

    //get the list of todos available

    let allListItems = document.getElementsByTagName('li');

    //it gices array like structure


    //convert it to an array

    // console.log(Array.from(allListItems))

    Array.from(allListItems).forEach(item => {

        let todoName = item.firstChild.textContent.toLowerCase();
        // console.log(todoName)

        console.log(todoName.indexOf(searchText));

        if (todoName.indexOf(searchText) != -1) {
            item.style.display = 'block';

        } else {
            item.style.display = 'none';
        }

    })



}
