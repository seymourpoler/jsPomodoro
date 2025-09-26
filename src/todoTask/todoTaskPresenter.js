function TodoTaskPresenter(view) {
    const tasks = [];
    view.subscribeToOnAddingTaskClicked(() =>{
        const aTask = view.task();
        if(aTask === null || aTask === undefined || aTask.trim() === ''){
            return;
        }

        tasks.push(aTask);
        view.showTasks(tasks);
        view.cleanTask();
    });

    view.subscribeToOnRemoveTaskClicked((aTask) =>{
        const index = tasks.indexOf(aTask);
        if (index < 0) { // only splice array when item is found
            return;
        }
        tasks.splice(index, 1);
        view.showTasks(tasks);
    });
}

if(module && module.exports){
    module.exports	= TodoTaskPresenter;
}