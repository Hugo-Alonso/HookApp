import { ToDoItem } from "./ToDoItem"

export const ToDoList = ({ toDos }) => {
    
    return (
        <ul className="list-group">
            {
                toDos.map( toDo => 
                    <ToDoItem key={ toDo.id } toDo={ toDo }/>
                )
            }      
        </ul>
    )
}