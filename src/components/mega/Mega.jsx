// poder inputar quantidade de números
// números entre 1 e 60
// não pode repetir os números
// botão que sempre que eu clicar ele vai gerar uma nova combinação de números
import React, { useState } from 'react'
import './Mega.css'


export default function Mega(props) {
    function newUniqueNumber(min, max, target) {
        const number = parseInt(Math.random() * (max - min)) + min;
        return target.includes(number) ? newUniqueNumber(min, max, target) : number
    }
    
    function generateNumbers(amount) {
        const numbers = Array(amount)
                .fill(0)
                .reduce((loopray) => {
                    const newNumber = newUniqueNumber(1, 60, loopray)
                    return [ ...loopray, newNumber ]
                }, [])
                .sort((a, b) => a - b)
    
        return numbers
    }

    const [finalNumbers, setFinalNumbers] = useState(Array(6).fill(0))


    return (
        <div>
            <h2>Mega sena</h2>
            <h3>{finalNumbers.join(' - ')}</h3>
            <button onClick={_ => setFinalNumbers(generateNumbers(5))}>Gerar números</button>
        </div>
    )
}