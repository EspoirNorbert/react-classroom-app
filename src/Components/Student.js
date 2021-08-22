import React, { Component } from 'react';


export  class Student extends Component {
     
    render() {
        return (
             <li> {this.props.nom} </li>
        );
    }
}