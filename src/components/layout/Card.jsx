import React from 'react'
import './Card.css'

export default props => {

    const defaultColor = 'red'

    const cardStyle = {
        backgroundColor: props.color || defaultColor,
        borderColor: props.color || defaultColor
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}