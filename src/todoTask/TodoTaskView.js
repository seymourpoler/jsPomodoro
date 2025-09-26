function TodoTaskView() {
    let self = this;

    self.subscribeToOnAddingTaskClicked = (handler) => {
        document.getElementById('addTask').addEventListener('click', ()=>{
            handler();
        });
    };

    self.subscribeToOnRemoveTaskClicked = (handler) => {
        document.getElementById('task-list').addEventListener('click', (event) => {
            const clickedElement = event.target;

            // Check if the clicked element is a checkbox
            if (clickedElement.matches('.task-checkbox')) {
                const taskTextSpan = clickedElement.nextElementSibling;
                taskTextSpan.classList.toggle('completed');
            }

            // Check if the clicked element is a delete button
            if (clickedElement.matches('.delete-btn')) {
                const listItem = clickedElement.parentElement;
                //taskList.removeChild(listItem);
                handler(
                    listItem.textContent.replace('delete', '')
                );
            }
        });
    };

    self.showTasks = (tasks) => {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        for (let task of tasks) {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-checkbox';

            const taskText = document.createElement('span');
            taskText.className = 'task-text';
            taskText.textContent = task;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';
            deleteButton.textContent = 'Delete';

            li.appendChild(checkbox);
            li.appendChild(taskText);
            li.appendChild(deleteButton);

            taskList.appendChild(li);
        }
    };

    self.task = () => {
        return document.getElementById('taskText').value;
    };

    self.cleanTask = () => {
        return document.getElementById('taskText').value = '';
    };
}

if(module && module.exports){
    module.exports	= TodoTaskView;
}