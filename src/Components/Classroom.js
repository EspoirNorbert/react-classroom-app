import React, { Component } from 'react';
import { AddStudent } from './AddStudent';
import { Student } from './Student';


export class Classroom extends Component {

    constructor(){
        super()
        this.handleDelete = this.handleDelete.bind(this)
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
    
    handleDelete(id) {
        this.setState(prevState => ({
            students: prevState.students.filter(student => student.id !== id)
        }) )
    }

    handleAdd = nom => {
        // cretae new student object
        const newStudent = {id: Date.now() , nom: nom}
        // reactualiser and add student
        this.setState({students: [ ...this.state.students,newStudent]})
    }


    render() {
    const learners = this.state.students;
      return (
        <div>
            <AddStudent  handleAdd={this.handleAdd} />
            <h1>La liste des etudiants de  {this.props.nom} </h1>
            { (!learners.length)? <p>Aucun etudiant</p> :  <ul>
               { 
                learners.map(learner => <Student key={learner.id} learner={learner} handleDelete={this.handleDelete  } />) 
               }
            </ul> 
            }
            
        </div>
      )
    };
}