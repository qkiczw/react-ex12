import React from 'react';

import Header from './Header';
import AddToDo from './AddToDo'
import Todo from './Todo';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            todos: [
                {name: 'Todo 1', isFinished: false},
                {name: 'Todo 2', isFinished: false},
                {name: 'Todo 3', isFinished: true},
                {name: 'Todo 4', isFinished: false},
                {name: 'Todo 5', isFinished: true}
            ]
        }
    };

    onAddedprops = (newTodoFromInput) => {
        let newTodo = {name: newTodoFromInput, isFinished: false};
        this.setState({ todos: [...this.state.todos, newTodo]});
    };

    render() {
        const taskTable = Object.keys(this.state.todos);
        return (
      <React.Fragment>
          <Header/>
          <AddToDo onAdded={this.onAddedprops}/>
          <ol>
              {taskTable.map( (task, key) =>
                  <Todo key ={key} name={this.state.todos[task].name} status={this.state.todos[task].isFinished} />)
                  }
          </ol>
      </React.Fragment>
    );
  }
}

export default App;


