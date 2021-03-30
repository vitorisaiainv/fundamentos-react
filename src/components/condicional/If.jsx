import React from 'react'

export default props => {

    //achar se o If tem algum filho chamado Else
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    //tudo menos o else
    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if (props.test) {
        return ifChildren
    } 
    else if (elseChild) {
        return elseChild
    }
    else {
        return false
    }
}

export const Else = props => {
    return props.children
}