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
        it('does not any thing if task is a string empty', ()=>{
            let onAddingTaskClickedHandler;
            view.subscribeToOnAddingTaskClicked.mockImplementation((handler) =>{
                onAddingTaskClickedHandler = handler;
            });
            view.task = () =>{return '';};
            new TodoTaskPresenter(view);

            onAddingTaskClickedHandler();

            expect(view.showTasks).not.toHaveBeenCalled();
        });

        it('adds a new todo task', () =>{
            let onAddingTaskClickedHandler;
            view.subscribeToOnAddingTaskClicked.mockImplementation((handler) =>{
                onAddingTaskClickedHandler = handler;
            });
            view.task = () =>{return 'a-todo-task';};
            new TodoTaskPresenter(view);

            onAddingTaskClickedHandler();

            const expectedTasks = ['a-todo-task'];
            expect(view.showTasks).toHaveBeenCalledWith(expectedTasks);
        });
    });
});