import React from 'react';

import Todo from './Todo';
import Header from './Header';
import AddToDo from './AddToDo'

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
    }

    render() {
        const taskTable = Object.keys(this.state.todos);
        return (
      <React.Fragment>
          <Header/>
          <AddToDo onAdded=""/>
          <ol>
              {taskTable.map( task =>
                  <Todo name={this.state.todos[task].name} status={this.state.todos[task].isFinished} />)
                  }
          </ol>
      </React.Fragment>
    );
  }
}

export default App;
