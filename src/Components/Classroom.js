import React, { Component } from 'react';
import { Student } from './Student';


export class Classroom extends Component {

    constructor(){
        super()
        this.state = {
            students: [
                {id:1, nom:'Ogueye Habiba Terrim'},
                {id:2, nom:'Ouedraogo Luc'},
                {id:3, nom:'Miraide Augusto Bassam'},
                {id:4, nom:'Fatou Aissatou Cissé'},
                {id:5, nom:'Aida Diao'}
            ]
        }
    }
    


    render() {
    const leaners = this.state.students;
     if(!leaners.length){
         return (
             <div>
                 <h1>La liste des etudiants de  {this.props.nom} </h1>
                 <p>Aucun etudiant</p>
             </div>
         )
     }
      return (
        <div>
            <h1>La liste des etudiants de  {this.props.nom} </h1>
            { (!leaners.length)? <p>Aucun etudiant</p> :  <ul>
               { 
                leaners.map(leaner => <Student key={leaner.id} nom={leaner.nom} />) 
               }
            </ul> }
            
        </div>
      )
    };
}