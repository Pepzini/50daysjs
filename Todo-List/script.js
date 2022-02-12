//personal task add different colors to each text
const form = document.getElementById("form");
const input = document.getElementById("input");
const todosList = document.getElementById("todos");
const deleteTodo = document.getElementById("delete-icon");

const todos = JSON.parse(localStorage.getItem('todos'));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addToDo();
});

function addToDo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }
  if (todoText) {
    const todoElement = document.createElement("div");
    const span = document.createElement("SPAN");
    const txt = document.createElement("i");
    txt.classList.add("fas", "fa-trash-alt");
    todoElement.classList.add("todo-item");

    if (todo && todo.completed) {
      todoElement.classList.add("completed");
    }
    todoElement.innerHTML = `
       <li>${todoText}</li>
       `;

    todoElement.addEventListener("click", () => {
      todoElement.classList.toggle("completed");
      updateLS();
    });

    span.addEventListener("click", () => {
      todosList.removeChild(todoElement);
      updateLS();
    });

    todosList.appendChild(todoElement);
    span.appendChild(txt);
    todoElement.appendChild(span);

    input.value = "";
    updateLS();
  }
}
function updateLS() {
  todoElement = document.querySelectorAll('li')

  const todos = []

  todoElement.forEach(todoElement => {
      todos.push({
          text: todoElement.innerText,
          completed: todoElement.classList.contains('completed')
      })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}
