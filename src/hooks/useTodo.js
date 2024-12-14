import React, { useEffect, useReducer } from "react";
import { toDoReducer } from "../08-useReducer/toDoReducer";

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

export const useTodo = () => {

    const [toDos, dispatch] = useReducer(toDoReducer, initialState, init );
    
    const pendingTodos = toDos.filter((todo) => !todo.done).length;

    const todosCount = toDos.length;

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

    return {
        toDos,
        todosCount,
        pendingTodos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}