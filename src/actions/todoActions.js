export const addTodo = todo => {
    return (dispatch) => {
        fetch("http://localhost:3001/todos", {
            method: "POST",
            headers: {
            "content-type": "application/json"
        },

            body: JSON.stringify({
                todo
            })
        })
        .then(resp => resp.json())
        .then(resp => dispatch({type: "ADD_TODO", todo: resp}))
        
    }
}
export const getAllTasks = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_TODOS", loading: true})
        fetch("http://localhost:3001/todos")
        .then(resp => resp.json())
        .then(resp => dispatch({type: "GET_TODOS", todos: resp}))
    }
}
