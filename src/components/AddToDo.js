import React from 'react'

export default class AddToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentInputValue: ''
        }
    }

    inputValue = e => this.setState({currentInputValue: e.target.value});

    onBtnClick = () => { this.props.onAdded(this.state.currentInputValue)
    console.log(this.state.currentInputValue);
    };

    render(){
        return <React.Fragment>
            <input id="input" type="text" onChange={this.inputValue} placeholder="New ToDo"/>
            <button id="Add" onClick={this.onBtnClick}>Add</button>
        </React.Fragment>
    }
}
