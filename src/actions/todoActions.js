export const addLog = tracker => {
    return (dispatch) => {
        fetch("http://localhost:3001/todos", {
            method: "POST",
            headers: {
            "content-type": "application/json"
        },

            body: JSON.stringify({
                tracker
            })
        })
        .then(resp => resp.json())
        .then(resp => dispatch({type: "ADD_TODO", log: resp}))
        
    }
}
export const getAllTasks = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_TODOS", loading: true})
        fetch("http://localhost:3001/todos")
        .then(resp => resp.json())
        .then(resp => dispatch({type: "GET_TODOS", logs: resp}))
    }
}
