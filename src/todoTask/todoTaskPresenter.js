function TodoTaskPresenter(view) {
    const tasks = [];
    view.subscribeToOnAddingTaskClicked(() =>{
        const aTask = view.task();
        if(aTask === null || aTask === undefined || aTask.trim() === ''){
            return;
        }

        tasks.push(aTask);
        view.showTasks(tasks);
    });
}

if(module && module.exports){
    module.exports	= TodoTaskPresenter;
}