import React from 'react';
import {Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';


class Teams extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            equipes: []
        }
    }
    componentDidMount() {
        let url = "http://localhost:3001/routesread/allteams";
        fetch(url)
        .then((response) => {
             return response.json(); 
            })
        .then((data) => {
             this.setState({equipes: data}) 
            })
    }
    render (){
        const equipe = this.state.equipes;
        console.log(equipe);

        return(
        <div>
            {equipe.map(equipes => (

                    <p>{equipes.nom_equipe}</p>
            ))}

            <Link to = "/"><button id = "buttonHome" >Go home</button></Link>
        </div>
        )
    }
}
export default Teams;