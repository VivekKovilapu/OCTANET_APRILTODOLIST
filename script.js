document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const newTodoInput = document.getElementById('new-todo');
    const addButton = document.getElementById('add-button');
    const clearCompletedButton = document.getElementById('clear-completed-btn');

    function createTodoItem(text) {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        const label = document.createElement('span');
        const deleteButton = document.createElement('button');

        checkbox.type = 'checkbox';
        label.textContent = text;
        deleteButton.textContent = 'Delete';

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(deleteButton);

        checkbox.addEventListener('change', function() {
            listItem.classList.toggle('completed');
        });

        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });

        return listItem;
    }

    addButton.addEventListener('click', function() {
        const newTodoText = newTodoInput.value.trim();

        if (newTodoText) {
            const newItem = createTodoItem(newTodoText);
            todoList.appendChild(newItem);
            newTodoInput.value = '';
        }
    });

    clearCompletedButton.addEventListener('click', function() {
        const completedItems = todoList.querySelectorAll('.completed');
        completedItems.forEach(item => {
            todoList.removeChild(item);
        });
    });
});
