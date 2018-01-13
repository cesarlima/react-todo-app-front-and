'use strict'
import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/icon-button'

const TodoForm = ({handleAdd, description, handleChange, handleSearch, handleClear}) => {
    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? handleSearch() : handleAdd()
        } else if(e.key === 'Escape') {
            handleClear()
        }
    }

    return (
        <div role='form 'className='todo-form'>
            <Grid cols='12 9 10'>
                <input 
                    type='text' 
                    id='description' 
                    className='form-control'
                    placeholder='Adicione uma tarefa'
                    value={description}
                    onKeyUp={keyHandler}
                    onChange={handleChange}
                />
            </Grid>
    
            <Grid cols='12 3 2'>
                <IconButton 
                    toolTip='Adicionar'
                    style='primary' 
                    icon='plus'
                    handleClick={handleAdd} 
                />
                <IconButton 
                    toolTip='Pesquisar'
                    style='info' 
                    icon='search'
                    handleClick={handleSearch} 
                />
                <IconButton 
                    toolTip='Limpar campo'
                    style='default' 
                    icon='close'
                    handleClick={handleClear} 
                />
            </Grid>
        </div>
    )
}

export default TodoForm
