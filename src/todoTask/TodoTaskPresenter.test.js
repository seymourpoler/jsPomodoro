import {describe, beforeEach, it, expect} from "vitest";
import {spyAllMethodsOf} from "../testing";

const TodoTaskPresenter = require( "./todoTaskPresenter" );
const TodoTaskView = require( "./TodoTaskView" );

describe('TodoTaskPresenter', () => {
    let view;

    beforeEach(() =>{
        view = new TodoTaskView();
        spyAllMethodsOf(view);
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
            new TodoTaskPresenter(view);

            onAddingTaskClickedHandler();

            expect(view.showTasks).not.toHaveBeenCalled();
        });

        it('does not anything if task is a white space', ()=>{
            view.task = () => {return '   ';};
            new TodoTaskPresenter(view);

            onAddingTaskClickedHandler();

            expect(view.showTasks).not.toHaveBeenCalled();
        });

        it('does not anything if task is null', ()=>{
            view.task = () => {return null;};
            new TodoTaskPresenter(view);

            onAddingTaskClickedHandler();

            expect(view.showTasks).not.toHaveBeenCalled();
        });

        it('does not anything if task is undefined', ()=>{
            view.task = () => {return undefined;};
            new TodoTaskPresenter(view);

            onAddingTaskClickedHandler();

            expect(view.showTasks).not.toHaveBeenCalled();
        });

        it('adds a new todo task', () =>{
            view.task = () => {return 'a-todo-task';};
            new TodoTaskPresenter(view);

            onAddingTaskClickedHandler();

            const expectedTasks = ['a-todo-task'];
            expect(view.showTasks).toHaveBeenCalledWith(expectedTasks);
            expect(view.cleanTask).toHaveBeenCalled();
        });
    });
});