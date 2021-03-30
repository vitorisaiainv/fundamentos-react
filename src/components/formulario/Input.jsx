import React, { useState } from 'react'
import './Input.css'

export default props => {

    const [valor, setValor] = useState('Inicial')   

    function quandoMudar(e) {
        setValor(e.target.value)
        
    }

    return (
        <div>
            <h2>{valor}</h2>
            {/* value e onchange o torna controlado - controlled component*/}
            <input className="Input" value={valor} onChange={quandoMudar} />

            {/* value undefined faz ficar sem estado - uncontrolled component*/}
            <input className="Input" value={undefined} /> 
        </div>
    )
}