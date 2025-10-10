import {describe, beforeEach, it, expect} from "vitest";
import {spyAllMethodsOf} from "../testing";
import Bus from "../bus";
import QuickPresetPresenter from "../quickPreset/quickPresetPresenter";

const TodoTaskPresenter = require( "./todoTaskPresenter" );
const TodoTaskView = require( "./TodoTaskView" );
const Bus = require('../bus');

describe('TodoTaskPresenter', () => {
    let view, bus;

    beforeEach(() =>{
        view = new TodoTaskView();
        spyAllMethodsOf(view);
        bus = new Bus();
    });

    describe('When adding new todo task is requested', () => {
        let onAddingTaskClickedHandler;

        beforeEach(() =>{
            view.subscribeToOnAddingTaskClicked.mockImplementation((handler) =>{
                onAddingTaskClickedHandler = handler;
            });
        });

        it('does not anything if task is a string empty', ()=>{
            view.task = () =>{return '';};
            new TodoTaskPresenter(view, bus);

            onAddingTaskClickedHandler();

            expect(view.showTasks).not.toHaveBeenCalled();
        });

        it('does not anything if task is a white space', ()=>{
            view.task = () => {return '   ';};
            new TodoTaskPresenter(view, bus);

            onAddingTaskClickedHandler();

            expect(view.showTasks).not.toHaveBeenCalled();
        });

        it('does not anything if task is null', ()=>{
            view.task = () => {return null;};
            new TodoTaskPresenter(view, bus);

            onAddingTaskClickedHandler();

            expect(view.showTasks).not.toHaveBeenCalled();
        });

        it('does not anything if task is undefined', ()=>{
            view.task = () => {return undefined;};
            new TodoTaskPresenter(view, bus);

            onAddingTaskClickedHandler();

            expect(view.showTasks).not.toHaveBeenCalled();
        });

        it('adds a new todo task', () =>{
            view.task = () => {return 'a-todo-task';};
            new TodoTaskPresenter(view, bus);

            onAddingTaskClickedHandler();

            const expectedTasks = ['a-todo-task'];
            expect(view.showTasks).toHaveBeenCalledWith(expectedTasks);
            expect(view.cleanTask).toHaveBeenCalled();
        });
    });

    describe('When removing a task is requested', () => {
        let onAddingTaskClickedHandler;
        let onRemovingTaskClickedHandler;

        beforeEach(() =>{
            view.subscribeToOnAddingTaskClicked.mockImplementation((handler) =>{
                onAddingTaskClickedHandler = handler;
            });
            view.subscribeToOnRemoveTaskClicked.mockImplementation((handler) =>{
                onRemovingTaskClickedHandler = handler;
            });
            view.task = () =>{return 'aaaa';};

            new TodoTaskPresenter(view, bus);
        });

        it('removes a task', () =>{
            onAddingTaskClickedHandler();

            onRemovingTaskClickedHandler('aaaa');

            expect(view.showTasks).toHaveBeenCalledWith([]);
        });

        it('does nothing if there is no tasks', () =>{
            onRemovingTaskClickedHandler('aaaa');

            expect(view.showTasks).not.toHaveBeenCalled();
        });

        it('does nothing if  task does not exist', () =>{
            onRemovingTaskClickedHandler('bb');

            expect(view.showTasks).not.toHaveBeenCalled();
        });
    });

    describe('When hiding todo list are requested', () =>{
        it('hides todo list', () =>{
            new TodoTaskPresenter(view, bus);

            bus.publish('hideTodoSection');

            expect(view.hide).toHaveBeenCalled();
        });
    });

    describe('When showing todo list is requested', () =>{
        it('shows todo list', () =>{
            new TodoTaskPresenter(view, bus);

            bus.publish('showTodoSection');

            expect(view.show).toHaveBeenCalled();
        });
    });
});