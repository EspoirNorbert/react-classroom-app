import React, { Component } from 'react';


export class Student extends Component {

    constructor(props){
        super(props)
    }
     
    render() {
        return (
            <div style={{textAlign: 'left', borderBottom:'1px dotted'}} >
                {this.props.learner.nom}
                <button style={{ float: "right" }} onClick={this.props.handleDelete.bind(this, this.props.learner.id)}>X</button>
            </div>
        );
    }
}