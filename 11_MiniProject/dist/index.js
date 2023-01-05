"use strict";
function printMsg(msg) {
    console.log(msg);
    console.log(msg);
}
printMsg('Hello Typescript');
var btn = document.getElementById('btn'); //exclamation mark tells TS that value won't be null
var input = document.getElementById('todoinput'); // as ... - type assertion  
var form = document.querySelector('form');
var list = document.getElementById('todolist');
var todos = readLocalStorage();
todos.forEach(createTodo);
// btn?.addEventListener('click', function () { //? optional chaining do if btn not null
//     alert(input.value)
//     input.value = ''
// })
form.addEventListener('submit', handleSubmit);
function handleSubmit(evt) {
    evt.preventDefault();
    var newTodo = {
        text: input.value,
        completed: false
    };
    todos.push(newTodo);
    saveTodos();
    createTodo(newTodo);
    input.value = '';
}
function createTodo(todo) {
    var newLi = document.createElement('li');
    var checkInput = document.createElement('input');
    checkInput.type = 'checkbox';
    checkInput.checked = todo.completed;
    checkInput.addEventListener('change', function () {
        todo.completed = checkInput.checked;
        saveTodos();
    });
    newLi.append(todo.text);
    newLi.append(checkInput);
    list.append(newLi);
}
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function readLocalStorage() {
    var localTodos = localStorage.getItem('todos');
    if (localTodos === null)
        return [];
    return JSON.parse(localTodos);
}
