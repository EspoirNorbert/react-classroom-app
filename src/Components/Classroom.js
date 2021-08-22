import React, { Component } from 'react';
import { AddStudent } from './AddStudent';
import { Student } from './Student';
import axios from 'axios';


export class Classroom extends Component {

    constructor(){
        super()
        this.handleDelete = this.handleDelete.bind(this)
        this.state = {students: [], error:null, isLoading:true }
    }

    componentDidMount(){
        axios.get('http://localhost:3333/learners')
        .then(res => {
            const students = res.data
            this.setState({students , isLoading: false})
        })
        .catch(error  => this.setState({error, isLoading: false})) 
    }
    
    handleDelete(id) {
        axios.delete('http://localhost:3333/learners/'+id)
        .then(res => {
            this.setState(prevState => ({
                students: prevState.students.filter(student => student.id !== id)
            }) )
        })
        .catch(error  => this.setState({error, isLoading: false}))
    }

    handleAdd = nom => {
        axios.post('http://localhost:3333/learners/', {nom})
        .then(res => {
            this.setState({students: [ ...this.state.students,res.data]})
            })
    }


    render() {
    const learners = this.state.students;
    const isLoading = this.state.isLoading;
      return (
        <div>
            <AddStudent  handleAdd={this.handleAdd} />
            <h1>La liste des etudiants de  {this.props.nom} </h1>
            { (!learners.length)? <p>Aucun etudiant</p> :  <ul>
               { 
                 (isLoading) ? <p>Loading ...</p> :
                learners.map(learner => <Student key={learner.id} learner={learner} handleDelete={this.handleDelete  } />) 
               }
            </ul> 
            }
            
        </div>
      )
    };
}