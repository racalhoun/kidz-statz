import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import Dropdown from 'react-simple-dropdown'
import LoginPage from './LoginPage'
import ParentShow from '../parents/ParentShow'
import ChildShow from '../child/ChildShow'
class HomePage extends Component {
  state={
    users:[],
    children:[]
  }
  componentWillMount(){
    this.getAllUsers()
    this.getAllChildren()
  }

  getAllUsers = async ()=>{
    const res = await axios.get('/api/users')
    this.setState({users: res.data})
  }
  getAllChildren = async ()=>{
    const res = await axios.get('/api/children')
    this.setState({children: res.data})
  }

 

  render () {
    return (
      <div>
      
       <h1>Welcome to Kidz Statz!</h1>
      
      <div>
       <h3>Users List</h3>
       {this.state.users.map(user=>{
         return (<Link key={user._id} to={`/parent/${user._id}`}>{user.firstName} {user.lastName}/</Link>)  
       })}
      </div>
      <div> 
       <h3>Kidz List</h3>
       {this.state.children.map(child=>{
         return(<Link key={child._id} to={`/child/${child._id}`}>{child.firstName} {child.lastName}/</Link>)
       })}
       </div>
    
      <div>
        <span>
          <button><Link to='/login'>LogIn</Link></button>
          <button><Link to='/user'>Sign Up</Link></button>
          </span>
        
      </div>    
      </div>
    )
  }
}

export default HomePage