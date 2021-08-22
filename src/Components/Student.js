import React, { Component } from 'react';


export class Student extends Component {

    constructor(props){
        super(props)
    }
     
    render() {
        return (
            <div>
                {this.props.learner.nom}
                <button onClick={this.props.handleDelete.bind(this, this.props.learner.id)}>X</button>
            </div>
        );
    }
}