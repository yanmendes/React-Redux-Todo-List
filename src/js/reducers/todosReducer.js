import { ADD_TODO, FETCH_TODOS, UPDATE_TODO, DELETE_TODO } from '../actions/types';

const initalState = {
    todos: [],
    newTodo: '',
    response: {}
};

export default function (state = initalState, action) {
    switch (action.type) {
        case FETCH_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        case UPDATE_TODO:
        case DELETE_TODO:
            return {
                ...state,
                response: action.payload
            }
        default: return state;
    }
}