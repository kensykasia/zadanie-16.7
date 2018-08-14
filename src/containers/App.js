import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          data: [{
              id: 1,
              text: 'nauka z Kodillą'
            }, {
              id: 2,
              text: 'zadanie z Kodillą'
            }, {
              id: 3,
              text: 'nakarmić dziecko :-)'
            }]
      };
      this.remove = this.removeTodo.bind(this);
    }
    addTodo(val){
      const todo = {
          text: val,
          id: uuid.v4(),
      };
      const data = [...this.state.data, todo];
      this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
              <Title title= 'To do:' numberoftasks={this.state.data.length} />
              <TodoList todos={this.state.data}
              remove={this.remove}/>
            </div>
        );
    }
}
export default hot(module)(App);
