export const addLog = tracker => {
    return (dispatch) => {
        fetch("http://localhost:3001/trackers", {
            method: "POST",
            headers: {
            "content-type": "application/json"
        },

            body: JSON.stringify({
                tracker
            })
        })
        .then(resp => resp.json())
        .then(resp => dispatch({type: "ADD_LOG", log: resp}))
        
    }
}


export const deleteLog = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/trackers/${id}`, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then(response => dispatch({type: "DELETE_LOGS", log: response}),console.log("this is id", id))
    }
}

export const getAllTrackers = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_LOGS", loading: true})
        fetch("http://localhost:3001/trackers")
        .then(resp => resp.json())
        .then(resp => dispatch({type: "GET_LOGS", logs: resp}))
    }
}
