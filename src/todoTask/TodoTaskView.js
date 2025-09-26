function TodoTaskView() {
    let self = this;

    self.subscribeToOnAddingTaskClicked = (handler) => {
        document.getElementById('addTask').addEventListener('click', ()=>{
            handler();
        });
    };

    self.showTasks = (tasks) => {
        throw new Error('not implemented');
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