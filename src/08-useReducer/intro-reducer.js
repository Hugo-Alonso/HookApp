
const initialState = [{
    id: 1,
    toDo: 'Recolectar la piedra del Alma',
    done: false
}];

const toDoReducer = ( state = initialState, action = {}) => {

    if (action.type == '[TODO] add toDo' ) {
        return [...state, action.payload];
    }
    
    return state;
};

const toDos = toDoReducer();

const newToDo = {
    id: 2,
    toDo: 'Recolectar piedra del Poder',
    done: false
}

const AddToDoAction = {
    type: '[TODO] add toDo',
    payload: mewToDo,
}

toDos = toDoReducer( toDos, AddToDoAction);

// const newToDo2 = {
//     id: 3,
//     toDo: 'Recolectar piedra del Tiempo',
//     done: false
// }

console.log(toDos);
