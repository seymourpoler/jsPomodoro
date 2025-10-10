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

            if (clickedElement.matches('.delete-btn')) {
                handler(clickedElement.parentElement.textContent.replace('Delete', ''));
            }
        });
    };

    self.showTasks = (tasks) => {
        const listOfTasks = document.getElementById('task-list');
        listOfTasks.innerHTML = '';

        for (let task of tasks) {
            const li = document.createElement('li');

            const taskText = document.createElement('span');
            taskText.className = 'task-text';
            taskText.textContent = task;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';
            deleteButton.textContent = 'Delete';

            li.appendChild(taskText);
            li.appendChild(deleteButton);

            listOfTasks.appendChild(li);
        }
    };

    self.task = () => {
        return document.getElementById('taskText').value;
    };

    self.cleanTask = () => {
        return document.getElementById('taskText').value = '';
    };

    self.show = () =>{
        document.getElementById('todo').style.display = 'block';
    };

    self.hide = () =>{
        document.getElementById('todo').style.display = 'none';
    };
}

if(module && module.exports){
    module.exports	= TodoTaskView;
}