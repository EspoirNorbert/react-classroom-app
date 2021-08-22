import React, { Component } from 'react';


export class AddStudent extends Component {

    constructor(props) {
        super(props)
        this.state=  {nom: '',placeholder: "Nom de l'etudiant"}
    }

    // event gestion
    handleChange = event => this.setState({nom: event.target.value}) 
   
    //add student
    handleAdd = e  => {
        e.preventDefault();
        this.props.handleAdd(this.state.nom);
        this.setState({nom: ''});
    }

    //render
    render() {
      return (
        <div>
            <form onSubmit={this.handleAdd}>
                <input 
                     name='Nom'
                     placeholder= {this.state.placeholder}
                     value={this.state.nom}
                     onChange={this.handleChange}
                />
                <input type="submit" value='Ajoutez' />
            </form>
        </div>
      )
    };
}