import React from 'react'
import produtos from '../../data/produtos'

export default props => {

    //transformar array em item da tabela
    function getItems() {
        return produtos.map((produto, i) => {
            return (
                <tr key={i}>
                    <td>
                        {produto.id}
                    </td>                
                    <td>
                        {produto.nome}
                    </td>
                    <td>
                        {produto.preço}
                    </td>                
                </tr>
            )
        })  
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Nome
                    </th>                
                    <th>
                        Preço (R$)
                    </th> 
                </tr>
            </thead>
            <tbody>
                {getItems()}
            </tbody>
        </table>
    )

}