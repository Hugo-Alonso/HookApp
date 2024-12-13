import React, { useEffect, useReducer } from "react";
import { toDoReducer } from "./toDoReducer";
import { ToDoList } from "./components/ToDoList";
import { ToDoAdd } from "./components/ToDoAdd";
import './TodoApp.css';

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar bayas del jardin',
    //     done: false
    // }
];

const init = () => {
    return JSON.parse( localStorage.getItem('toDos')) || [];
}

export const TodoApp = () => {
    const [toDos, dispatch] = useReducer(toDoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify( toDos ));
        // console.log(toDos);
    }, [toDos])
    
    const handleNewTodo = (todo) => {
        dispatch({
            type: "[TODOLIST] Add ToDo",
            payload: todo,
        });
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: "[TODOLIST] Remove ToDo",
            payload: id,
        });
    };

    const handleToggleTodo = (id) => {
        dispatch({
            type: "[TODOLIST] Toggle ToDo",
            payload: id,
        });
    };

    const pendingTodos = toDos.filter((todo) => !todo.done).length;

    return (
        <>
            <h1>
                TodoApp: {toDos.length}, <small>pendientes: {pendingTodos}</small>
            </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ToDoList 
                        toDos={toDos} 
                        onDeleteTodo={handleDeleteTodo} // onDeleteTodo = { (id) => handleDeleteTodo(id) }
                        onToggleTodo={handleToggleTodo} 
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar ToDo:</h4>
                    <hr />
                    <ToDoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
};
