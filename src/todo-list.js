import TodoItem from "./todo-item";

export default class TodoList {
    constructor() {
        this._taskList = [];
        this._todoListEl = null;
    }

    addTask = (task) => {
        this._taskList.push(new TodoItem(task));
        if (this._todoListEl) {
            const event = new Event("click");
            this._todoListEl.dispatchEvent(event);
        }
    };

    getTodoList() {
        return this._taskList;
    }

    getTodoListEl() {
        return this._todoListEl;
    }

    getTodoItem(id) {
        return this._taskList.find((task) => task.getTaskId() === id);
    }

    onMakeDone = ({ target }) => {
        const currentTodoItemEl = target.closest(".todo-item");
        if (currentTodoItemEl) {
            const todoId = currentTodoItemEl.dataset.todoId;
            this.getTodoItem(+todoId).toggleDone();
        }
    };

    getEl() {
        const todoListEl = document.createElement("ul");
        todoListEl.classList.add("todo-list");

        todoListEl.append(...this._taskList.map((task) => task.getEl()));

        if (this._todoListEl) {
            this._todoListEl.removeEventListener("click", this.onMakeDone);
        }
        this._todoListEl = todoListEl;
        this._todoListEl.addEventListener("click", this.onMakeDone);

        return todoListEl;
    }
}
