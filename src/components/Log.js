import React from 'react'

const Log = props => {
    return (
        <li>{props.date}</li>,
        <li>{props.language}</li>,
        <li>{props.length}</li>,
        <li>{props.notes}</li>

    )
}

export default Log