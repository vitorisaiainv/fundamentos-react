import React from 'react'

export default function ComParametro(props) {

    const status = props.nota >= 7 ? 'Aprovado o/' : 'Deu ruim :~~~~'

    return ( 
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno}</strong> tem nota {props.nota}
            </p>
            <p>{ status }</p>
        </div> 
    )
}