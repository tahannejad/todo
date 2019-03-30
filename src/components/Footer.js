import React, { Component } from 'react'
import '../App.css'
import todoStore from '../store/TodoStore'
import { observer } from 'mobx-react'

@observer
class Footer extends Component {

    state = {
        all: true,
        act: false,
        com: false
    }

    render() {
        if (todoStore.todosFull.length == 0)
            return null
        else
            return (
                <div className="footer">
                    <button className="todo-count">
                        <span>
                            {todoStore.todosFull.filter(todo => todo.completed == false).length}
                        </span>
                        <strong> items left</strong>
                    </button>
                    <ul className="filters">
                        <li>
                            <button onClick={() => {todoStore.allTodo()}}>
                                <a className={todoStore.all ? 'selected' : ' '}>
                                    All
                                </a>
                            </button>
                        </li>

                        <li>
                            <button onClick={() => {todoStore.actTodo()}}>
                                <a className={todoStore.act ? 'selected' : ' '}>
                                    Active
                                </a>
                            </button>
                        </li>

                        <li>
                            <button onClick={() => {todoStore.comTodo()}}>
                                <a className={todoStore.com ? 'selected' : ' '}>
                                    Completed
                                </a>
                            </button>
                        </li>
                    </ul>
                    <a onClick={() => {todoStore.clearComplete()}} className="clear-completed">
                        clear-completed
                    </a>
                </div>
            )
    }
}
export default Footer