'use strict'
import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/page-header'
import TodoForm from './todo-form'
import TodoList from './todo-list'

const URL = 'http://localhost:3003/api/todos'

class Todo extends Component {
    constructor() {
        super()
        this.state = {
            description: '',
            list: []
        }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }
    handleClear() {
        this.refresh()
    }
    handleSearch() {
        this.refresh(this.state.description)
    }
    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
             .then(res => this.refresh(this.state.description))
    }
    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
             .then(res => this.refresh(this.state.description))
    }
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
             .then(resp => this.refresh(this.state.description))
    }
    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
             .then(resp => 
                this.setState({
                    description: description,
                    list: resp.data
                })
            )
    }    
    handleAdd() {
       const description = this.state.description
       axios.post(URL, { description })
            .then(resp => this.refresh())
    }
    handleChange(e) {
        this.setState({description: e.target.value})
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm 
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList 
                    items={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}

export default Todo