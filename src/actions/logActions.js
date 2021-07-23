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

export const getAllTrackers = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_LOGS", loading: true})
        fetch("http://localhost:3001/trackers")
        .then(resp => resp.json())
        .then(resp => dispatch({type: "GET_LOGS", logs: resp}))
    }
}
