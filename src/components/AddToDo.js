import React from 'react'


export default class AddToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newTask: 'xxxxxx'
        }


    }

    addNewToDo = (e) => this.setState({newTask: e.target.value});

    render(){
        return <React.Fragment>
            <input id="input" type="text" onChange={this.addNewToDo}/>
            <button id="Add">Add</button>
            <p>state: {this.state.newTask}</p>

        </React.Fragment>
    }
}