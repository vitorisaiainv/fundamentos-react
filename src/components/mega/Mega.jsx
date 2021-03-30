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
    const [amount, setAmount] = useState(props.amount || 6)

    function handleAmount(e) {
        setAmount(+e.target.value) // '+' converts to number. without it it's a string and it won't work
    }


    return (
        <div>
            <h2>Mega sena</h2>
            <h3>{finalNumbers.join(' - ')}</h3>
            <input value={amount} onChange={handleAmount}></input>
            <button onClick={_ => setFinalNumbers(generateNumbers(amount))}>Gerar {amount} número(s)</button>
        </div>
    )
}