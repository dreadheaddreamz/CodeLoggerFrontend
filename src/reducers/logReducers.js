const logReducer = (state = {logs: [], loading: false}, action) => {
    switch(action.type) {
        case 'ADD_LOG':
            return{...state, logs: [...state.logs, action.log]}
            case 'LOADING_LOGS':
                return{...state,
                    logs: [...state.logs], loading: true}
            case 'GET_LOGS':
                return {...state, logs: action.logs, loading: false}    
            default:
                return state;
    }

}

export default logReducer