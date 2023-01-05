function printMsg(msg: string): void {
    console.log(msg);
    console.log(msg)
}

printMsg('Hello Typescript')

interface Todo {
    text: string;
    completed: boolean;
}


const btn = document.getElementById('btn')!; //exclamation mark tells TS that value won't be null
const input = document.getElementById('todoinput')! as HTMLInputElement; // as ... - type assertion  
const form = document.querySelector('form')!;
const list = document.getElementById('todolist') as HTMLUListElement;

const todos: Todo[] = readLocalStorage();
todos.forEach(createTodo);

// btn?.addEventListener('click', function () { //? optional chaining do if btn not null
//     alert(input.value)
//     input.value = ''
// })

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt: SubmitEvent) {
    evt.preventDefault();

    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    todos.push(newTodo);
    saveTodos();
    createTodo(newTodo);
    input.value = ''
}

function createTodo(todo: Todo) {
    const newLi = document.createElement('li');
    const checkInput = document.createElement('input');
    checkInput.type = 'checkbox'
    checkInput.checked = todo.completed

    checkInput.addEventListener('change', function () {
        todo.completed = checkInput.checked;
        saveTodos()
    })

    newLi.append(todo.text);
    newLi.append(checkInput);
    list.append(newLi);
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function readLocalStorage(): Todo[] {
    const localTodos = localStorage.getItem('todos')
    if (localTodos === null) return [];
    return JSON.parse(localTodos);
}