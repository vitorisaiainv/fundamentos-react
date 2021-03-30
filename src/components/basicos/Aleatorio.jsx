import React from 'react'

export default props => (
    <>
        Valor aleatório: {Math.ceil(Math.random() * (props.max - props.min) + props.min)}
    </>
)