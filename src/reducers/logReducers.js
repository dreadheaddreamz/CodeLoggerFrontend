const logReducer = (state = {logs: [], loading: false}, action) => {
    switch(action.type) {
        case 'ADD_LOG':
            return{...state, logs: [...state.logs, action.log]}

            default:
                return state;
    }

}

export default logReducer