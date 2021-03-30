import React, { cloneElement } from 'react'


export default props => (
    <div>
        {
            props.children.map((child, i) => {
                return cloneElement(child, { ...props, key: i })
            } )
        }
    </div>
)