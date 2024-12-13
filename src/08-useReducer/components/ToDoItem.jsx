import React from 'react';

export const ToDoItem = ({ toDo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span 
                className={`align-self-center ${toDo.done ? 'text-decoration-line-through' : ''}`}
                onClick={() => onToggleTodo(toDo.id)} // Agregamos la funcionalidad de toggle
                style={{ cursor: "pointer" }}
            >
                {toDo.description}
            </span>
            <button 
                onClick={() => onDeleteTodo(toDo.id)} // Pasar el id
                className="btn btn-danger"
            >
                Borrar
            </button>
        </li>
    );
};
