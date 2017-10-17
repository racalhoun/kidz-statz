import React, {Component} from 'react'
import axios from 'axios'
import ParentShow from '../parents/ParentShow'
import StatShow from '../stats/StatShow'
import {Link} from 'react-router-dom'


class ChildShow extends Component{
    state={
        children:{
            firstName:'',
            lastName:'',
            age:'',
            height:'',
            weight:'',
            stats:[]
        }
    }
     async componentWillMount(){
         const {childId} = this.props.match.params
         const res = await axios.get(`/api/children/${childId}`)
         this.setState({children: res.data})
     }    
    //  async componentWillMount(){
    //      const {statId} = this.props.match.params
    //      const res = await axios.get(`/api/children/:childId/stats/${statId}`)
    //      this.setState({stat: res.data})
    //  }    
     render(){
         return(
         <div>
             <h1>Kidz Portal</h1>
             <div>
             <h2>{this.state.children.firstName} {this.state.children.lastName}</h2>
             <ul>
                 <li>Age: {this.state.children.age}</li>
                 <li>Height: {this.state.children.height}</li>
                 <li>Weight: {this.state.children.weight}</li>
             </ul>
             <button><Link to={`/children/${this.state.children._id}/stats`}>Statz</Link></button>
             </div>
             </div>
         );   
     }
}
export default ChildShow;