//personal task add different colors to each text
const form = document.getElementById('form');
const input = document.getElementById('input');
const todosURL = document.getElementById('todos');

form.addEventListener('submit', (event) =>{
  event.preventDefault()

  addToDo()
})

function addToDo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }
     console.log(todoText);
}