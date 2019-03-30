import { observable, action } from 'mobx'
import TodoModel from './TodoModel'

class TodoStore {
    @observable todos = []
    @observable todosFull = []
    @observable lastID = 0

    @observable all = true
    @observable act = false
    @observable com = false

    @action
    filter = () => {
        if (this.all == true) {
            this.todos = this.todosFull
        }
        if (this.act == true) {
            this.todos = this.todosFull.filter(todo => {
                if(todo.completed == false)
                    return todo
            })
        }
        if (this.com == true) {
            this.todos = this.todosFull.filter(todo => {
                if(todo.completed == true)
                    return todo
            })
        }
    }

    @action
    clearComplete = () => {
        this.todosFull.forEach(todo => {
            if(todo.completed == true){
                this.deleteTodo(todo.id)
            }
        })
        this.filter()
    }

    @action
    addTodo(title) {
        this.todosFull.push(new TodoModel(this, title, false, this.lastID++))
        // console.log(lastID)
        this.filter()
    }
    
    @action
    allTodo = () => {
        this.all = true
        this.act = false
        this.com = false
        this.filter()
    }

    @action
    actTodo = () => {
        this.all = false
        this.act = true
        this.com = false
        this.filter()
    }

    @action
    comTodo = () => {
        this.all = false
        this.act = false
        this.com = true
        this.filter()
    }

    @action
    deleteTodo(id) {
        let x
        this.todos.forEach(todo => {
            if (todo.id == id)
                x = this.todos.indexOf(todo)
        })
        this.todos.remove(this.todos[x])
        // delete todos[a]
    }
}

const store = new TodoStore()
export default store