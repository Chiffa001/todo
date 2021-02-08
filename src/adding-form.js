export default class AddingForm {
    _text = "";
    _addingFormEl = null;
    _inputEl = null;

    onInputText = ({ target }) => {
        this._text = target.value;
        console.log(this);
    };

    get el() {
        return this._addingFormEl;
    }

    get inputEl() {
        return this._inputEl;
    }

    onSubmit = (e, cb) => {
        e.preventDefault();
        console.log(cb);
        cb(this._text);
    };

    getEl(cb) {
        const formEl = document.createElement("form");
        formEl.classList.add("todo__adding-form", "adding-form");
        formEl.addEventListener("submit", (e) => this.onSubmit(e, cb));

        const inputEl = document.createElement("input");
        inputEl.setAttribute("type", "text");
        inputEl.classList.add("adding-form__field");
        this._inputEl = inputEl;
        inputEl.addEventListener("input", this.onInputText);

        const btnEl = document.createElement("button");
        btnEl.setAttribute("type", "submit");
        btnEl.classList.add("adding-form__btn", "btn");
        btnEl.textContent = "add";

        formEl.append(inputEl, btnEl);
        this._addingFormEl = formEl;
        return this._addingFormEl;
    }
}
