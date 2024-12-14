import React, { useEffect, useReducer } from "react";
import { toDoReducer } from "./toDoReducer";
import { ToDoList } from "./components/ToDoList";
import { ToDoAdd } from "./components/ToDoAdd";
import './TodoApp.css';
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
    const { toDos, todosCount, pendingTodos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

    return (
        <>
            <h1>
                TodoApp: { todosCount } <small>pendientes: {pendingTodos}</small>
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
