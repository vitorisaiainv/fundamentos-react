import React from 'react'
import If, { Else } from './If'

export default props => {
    const usuario = props.usuario || {}

    return (
        <div>
            <If test={usuario && usuario.nome}>
                Opa, fala <strong>{usuario.nome}</strong>!
                <Else>
                    <span>Pq não dissesse teu nomi?</span>
                </Else>
            </If>
        </div>
    )
}