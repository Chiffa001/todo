import TodoList from "./todo-list";
import AddingForm from "./adding-form";

const tasks = [
    "Смазать пенку",
    "Вынести мусор",
    "Купить самбреро",
    "Купить доллары",
];

const todoList = new TodoList();
const addingForm = new AddingForm();
tasks.forEach((task) => todoList.addTask(task));

const todoContainerEl = document.querySelector(".todo__container");
todoContainerEl.append(todoList.getEl());
todoContainerEl.before(addingForm.getEl(todoList.addTask));

const onMakeDone = () => {
    todoList.getTodoListEl().removeEventListener("click", onMakeDone);
    todoContainerEl.innerHTML = "";
    
    todoList.getEl().addEventListener("click", onMakeDone);
    todoContainerEl.append(todoList.getTodoListEl());
};

todoList.getTodoListEl().addEventListener("click", onMakeDone);
