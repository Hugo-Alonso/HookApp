import { useForm } from "../../hooks";

export const ToDoAdd = ({ onNewTodo }) => {
    const { description = "", onInputChange, onResetForm } = useForm({
        description: "" 
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.trim().length <= 1) return; // Validación robusta

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description.trim(),
        };

        onNewTodo(newTodo);
        onResetForm();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={description} 
                onChange={onInputChange}
            />
            <button 
                type="submit" 
                className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
    );
};

