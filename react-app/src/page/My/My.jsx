import React, { Component } from 'react'
import GridDemo from './GridDemo/GridDemo'
import TodoList from './TodoList/TodoList.jsx'

export default class My extends Component {
    render() {
        return (
            <div>
                {/* <GridDemo></GridDemo> */}
                <TodoList></TodoList>
            </div>
        )
    }
}
