import React , {Component} from 'react'
import '../App.css'
import { observer } from 'mobx-react'
import todoStore from '../store/TodoStore'

@observer
class TodoItem extends Component {
    constructor(props) {
        super(props)
    }
    onToggle = () => {
        this.props.todo.toggle()
    }
    remove = () => {
        todoStore.deleteTodo(this.props.todo.id)
        console.log(this.props.todo.id)
    }
    render() {
        const { todo } = this.props
        return (
            <li className={todo.completed ? 'completed' : ' '}>
            <div className="view">
                <input 
                    onChange = {this.onToggle}
                    type="checkbox" 
                    className="toggle" 
                    value="on" 
                    checked={todo.completed}
                />
                <label>{todo.title}</label>
                <button
                onClick = {this.remove}
                className="destroy"/>
              </div>
            </li>
        )
    }
}
export default TodoItem