const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

const toDos = []

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
    
}

function deleteToDO(event){
    const li= event.target.parentElement
    li.remove()
}

function paintToDo(newTodo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newTodo
    const button = document.createElement("button")
    button.innerText = "삭제"
    button.addEventListener("click", deleteToDO)
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
    button.setAttribute("id","button")
}

function handleToDoSubmit(event){
    event.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value=""
    toDos.push(newTodo)
    paintToDo(newTodo)
    saveToDos()
    
}
toDoForm.addEventListener("submit",handleToDoSubmit)

function sayHello(){
    console.log("hello")
}

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)
    parsedToDos.forEach(sayHello)
}