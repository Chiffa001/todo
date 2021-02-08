export default class TodoItem {
    static counter = 1;

    constructor(task) {
        this._id = TodoItem.counter++;
        this._task = task;
        this._done = false;
    }

    getTask() {
        return this._task;
    }

    getTaskId() {
        return this._id;
    }

    isDone() {
        return this._done;
    }

    toggleDone() {
        this._done = !this._done;
    }

    getEl() {
        const todoItemEl = document.createElement("li");
        todoItemEl.classList.add("todo-item");
        todoItemEl.dataset.todoId = this._id;
        if (this._done) todoItemEl.classList.add("todo-item--done");

        const inputEl = document.createElement("input");
        inputEl.classList.add("todo-item__state");
        inputEl.setAttribute("type", "checkbox");
        inputEl.checked = this._done;

        const spanEl = document.createElement("span");
        spanEl.classList.add("todo-item__name");
        spanEl.textContent = this._task;

        todoItemEl.append(inputEl, spanEl);
        return todoItemEl;
    }
}
