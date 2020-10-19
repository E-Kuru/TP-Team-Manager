import React from 'react';
import {Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class Home extends React.Component {
constructor(props){
    super(props)
    
   
}

render (){
    return (
        <div>
            <Link to = "/Teams"><button id = "buttonHome" >Manage All teams</button></Link>
        </div>
    )
}
}

export default Home;