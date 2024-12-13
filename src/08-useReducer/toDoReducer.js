
export const toDoReducer = (state = [], action) => {
    switch (action.type) {
        case "[TODOLIST] Add ToDo":
            return [...state, action.payload];

        case "[TODOLIST] Remove ToDo":
            return state.filter((todo) => todo.id !== action.payload); // ! Devuelve state sin el que quieres eliminar

        case "[TODOLIST] Toggle ToDo":
            return state.map((todo) =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
            
        default:
            return state;
    }
};
