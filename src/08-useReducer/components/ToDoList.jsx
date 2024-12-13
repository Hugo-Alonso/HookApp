import React from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ toDos, onDeleteTodo, onToggleTodo }) => {
    return (
        <ul className="list-group">
            {toDos.map((toDo) => (
                <ToDoItem 
                    key={toDo.id} 
                    toDo={toDo} 
                    onDeleteTodo={onDeleteTodo} 
                    onToggleTodo={onToggleTodo} // Pasar onToggleTodo
                />
            ))}
        </ul>
    );
};
