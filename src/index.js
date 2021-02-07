import TodoList from "./todo-list";

const tasks = [
    "Смазать пенку",
    "Вынести мусор",
    "Купить самбреро",
    "Купить доллары",
];

const todoList = new TodoList();
tasks.forEach((task) => todoList.addTask(task));

const todoContainerEl = document.querySelector(".todo__container");
todoContainerEl.append(todoList.renderEl());

const onMakeDone = () => {
    todoList.getTodoListEl().removeEventListener("click", onMakeDone);
    todoContainerEl.innerHTML = "";
    todoList.renderEl();
    todoList.getTodoListEl().addEventListener("click", onMakeDone);
    todoContainerEl.append(todoList.getTodoListEl());
};

todoList.getTodoListEl().addEventListener("click", onMakeDone);
