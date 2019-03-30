import React , {Component} from 'react'
import '../App.css'
import todoStore from '../store/TodoStore'
import { observer } from 'mobx-react'

@observer
class TodoEntry extends Component {
    state = {
        value: ' '
    }
    handleKeyDown = event => {
        if(event.keyCode !== 13)
            return
        event.preventDefault()
        todoStore.addTodo(this.state.value)
        this.setState({
            value: ' '
        })
    }
    render() {
        return (
            <header className="header">
                <input
                    value = {this.state.value}
                    onChange={event => this.setState({value: event.target.value})}
                    onKeyDown={
                        event => this.handleKeyDown(event)
                    }
                    type="text"
                    className="new-todo"
                    placeholder="What needs to be done?"
                />
            </header>
        )
    }
}
export default TodoEntry