const todoReducer = (state = {todos: [], loading: false}, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return{...state, todos: [...state.todos, action.todo]}
            case 'LOADING_TODOS':
                return{...state,
                    todos: [...state.todos], loading: true}
            case 'GET_TODOS':
                return {...state, todos: action.todos, loading: false}    
            default:
                return state;
    }

}

export default todoReducer