'use strict'
import React from 'react'

const IconButton = ({hide, style, handleClick, icon, toolTip}) => {
    if(hide) {
        return null
    }

    return (
        <button 
            data-toggle="tooltip" 
            data-placement="top" 
            title={toolTip}
            className={`btn btn-${style}`}
            onClick={handleClick}    
        >
            <i className={`fa fa-${icon}`}></i>
        </button>
    )
}

export default IconButton
