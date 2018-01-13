'use strict'
import React from 'react'
import IconButton from '../template/icon-button'

const TodoList = ({ items, handleMarkAsDone, handleMarkAsPending, handleRemove }) => {
    const renderRows = () => {
        const list = items || []

        return list.map(todo => (
            <tr key={todo._id} >
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className='change-opacity'>
                    <IconButton 
                        toolTip='Concluir'
                        style='success'
                        icon='check'
                        handleClick={() => handleMarkAsDone(todo)}
                        hide={todo.done}
                    />
                    <IconButton
                        toolTip='Voltar'
                        style='warning'
                        icon='undo'
                        handleClick={() => handleMarkAsPending(todo)}
                        hide={!todo.done}
                    />
                    <IconButton
                        toolTip='Deletar'
                        style='danger'
                        icon='trash-o'
                        handleClick={() => handleRemove(todo)}
                        hide={!todo.done}
                    />
                </td>
            </tr>
        ))
    }
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='table-actions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

export default TodoList
