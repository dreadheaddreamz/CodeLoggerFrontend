export const addLog = log => {
    return (dispatch) => {
        fetch("http://localhost:3001/trackers", {
            method: "POST",
            headers: {
            "content-type": "application/json"
        },

            body: JSON.stringify({
                log
            })
        })
        .then(resp => resp.json())
        .then(resp => dispatch({type: "ADD_LOG", log: resp}))
        
    }
}

