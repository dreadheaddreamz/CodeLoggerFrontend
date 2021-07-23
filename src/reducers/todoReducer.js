const todoReducer = (state = {todos: [], loading: false}, action) => {
    switch(action.type) {
        case 'ADD_LOG':
            return{...state, todos: [...state.todos, action.todo]}
            case 'LOADING_LOGS':
                return{...state,
                    todos: [...state.todos], loading: true}
            case 'GET_LOGS':
                return {...state, todos: action.todos, loading: false}    
            default:
                return state;
    }

}

export default todoReducer