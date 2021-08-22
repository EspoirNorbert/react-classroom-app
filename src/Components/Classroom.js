import React, { Component } from 'react';
import { Student } from './Student';


export class Classroom extends Component {
    render() {
      return (
        <div>
            <h1>La liste des etudiants de  {this.props.nom} </h1>
            <ul>
               <Student nom='Ogueye Habiba Terrim' />
               <Student nom='Ouedraogo Luc' />
               <Student nom='Miraide Augusto Bassam' />
               <Student nom='Fatou Aissatou Cissé' />
               <Student nom='Aida Diao' />
            </ul>
            <Student />
        </div>
      )
    };
}