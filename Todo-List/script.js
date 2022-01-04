//personal task add different colors to each text
const form = document.getElementById('form');
const input = document.getElementById('input');
const todosList = document.getElementById('todos');
const deleteTodo= document.getElementById('delete-icon')

form.addEventListener('submit', (event) =>{
  event.preventDefault()

  addToDo()
})

function addToDo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }
     if (todoText) {
       const todoElement = document.createElement('div');
       todoElement.classList.add('todo-item')

       if (todo && todo.completed) {
          todoElement.classList.add('completed') 
       }
       todoElement.innerHTML = `
       <li>${todoText}</li>
        <i class="fas fa-trash-alt" id="delete-icon"></i>
       `
     
        todoElement.addEventListener('click', () => {
          todoElement.classList.toggle('completed');
        
      }) 
       todosList.appendChild(todoElement);

       input.value = '';
     }
}