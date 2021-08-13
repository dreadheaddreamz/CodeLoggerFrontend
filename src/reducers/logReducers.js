const logReducer = (state = {logs: [], loading: false}, action) => {
    switch(action.type) {
        case 'ADD_LOG':
            return{...state, logs: [...state.logs, action.log]}
            case 'LOADING_LOGS':
                return{...state,
                    logs: [...state.logs], loading: true}//my payload is logs, uses previous state snd spreads into new state
            case 'GET_LOGS':
                return {...state, logs: action.logs, loading: false} 
            case 'DELETE_LOGS':
                console.log('delete action', action)
                const logs = state.logs.filter(log => log.id !== action.log.id)
                return{...state, logs}
            default:
                return state;
    }

}

export default logReducer