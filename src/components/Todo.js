import React from 'react';

export default class Todo extends React.Component{

render() {
    let className = 'to-do';
    if (this.props.status) {
        className = 'done' }
        return <React.Fragment>
            <li className= {className}> {this.props.name} </li>
        </React.Fragment>
    }


}