import React from 'react';

export const ToDoItem = ( { toDo } ) => {
    return (
        <li key={ toDo.id } className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ toDo.description }</span>
            <button className="btn btn-danger">Borrar</button>
        </li>
    )
}
