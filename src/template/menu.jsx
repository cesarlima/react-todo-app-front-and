'use strict'
import React from 'react'

const Menu = () => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a href='#' className='navbar-brand'>
                    <i className='fa fa-calendar-check-o'></i> TodoApp 
                </a>        
            </div>

            <div id='navbar' className='navbar-collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href='#/todos'>Tarefas</a></li>
                    <li><a href='#/about'>Sobre</a></li>
                </ul>
            </div>
        </div>       
    </nav>
)

export default Menu
