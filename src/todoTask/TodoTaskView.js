function TodoTaskView() {
    let self = this;

    self.subscribeToOnAddingTaskClicked = (handler) => {
        throw new Error('not implemented');
    };

    self.showTasks = (tasks) => {
        throw new Error('not implemented');
    };

    self.task = () => {
        throw new Error('not implemented');
    };
}

if(module && module.exports){
    module.exports	= TodoTaskView;
}