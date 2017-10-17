import React, { Component } from 'react';
import axios from 'axios'
import ChildShow from '../child/ChildShow'
import{Link} from 'react-router-dom'

class StatShow extends Component {
    state={
      stat:[]     
    }
 async componentWillMount(){
    const {childId} = this.props.match.params
    const res = await axios.get(`/api/children/${childId}/stats`)
    this.setState({stat: res.data})
}    

   render(){
       return(
           <div>
               <h1>Statz</h1>
               {this.state.stat.map(stat=>{
                   return(
                   <div>
                       <ul>
                           <li>Sport: {stat.sport.name}</li> 
                           <li>Team Name: {stat.sport.teamName}</li>
                           <li>Location: {stat.sport.location}</li>
                           <li>Player Rating: {stat.sport.playerRating}</li>
                           <li>Position One: {stat.position.one}</li>
                           <li>Position Two: {stat.position.two}</li>
                           <li>Date Played: {stat.datePlayed}</li>
                           <li>Game Synopsis: {stat.description}</li>
                           </ul>
                   </div>           
                   )
               })}
               <span>
               <button><Link to='/'>Home</Link></button>
               <button><Link to={`/stats/${this.props.match.params.childId}`}>New Stat</Link></button>
               </span>
               </div>
       )
   }
}
   export default StatShow;