import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import TodoEntry from './components/TodoEntry'
import TodoItems from './components/TodoItems'
import todoStore from './store/TodoStore'
import Footer from './components/Footer'
import {observer} from 'mobx-react'

class App extends Component {
  
  @observer
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <h1>todo</h1>
        <TodoEntry />
        <TodoItems />
        <Footer />
      </div>
    );
  }
}

export default App;
