function TodoTaskPresenter(view, bus) {
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
        if (index < 0) {
            return;
        }
        tasks.splice(index, 1);
        view.showTasks(tasks);
    });

    bus.subscribe('showTodoSection', () =>{
        view.show();
    });

    bus.subscribe('hideTodoSection', () =>{
        view.hide();
    });
}

if(module && module.exports){
    module.exports	= TodoTaskPresenter;
}