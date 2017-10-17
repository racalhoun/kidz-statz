import React, {Component} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import ChildRegistrationForm from './ChildRegistrationForm'


class UserRegistrationForm extends Component{
    state = {
        newUser:{
            userName:'',
            password:'',
            firstName:'',
            lastName:'',
            address:'',
            children:[]
        },
        redirecttonewChild: false
    }
    handleChange = (event) =>{
        const attribute = event.target.name
        const updatedUser = {...this.state.newUser}
        updatedUser[attribute] = event.target.value
        this.setState({newUser: updatedUser})    
    }
    handleSubmit = async (event)=>{
        event.preventDefault()
        const res = await axios.post('/api/users', {
            user: this.state.newUser
        })
        console.log(res)
        this.setState({redirecttonewChild: true, newUser: res.data})
    }

    render(){
      if(this.state.redirecttonewChild){
          return <Redirect to={`/children/${this.state.newUser._id}`}/>
      }
    
        return(
        <div>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
            <div>
                <input onChange={this.handleChange} name='userName' type='text' 
                value={this.state.newUser.userName} placeholder='User Name'/>
            </div>
            <div>
                <input onChange={this.handleChange} name='password' type='text' 
                value={this.state.newUser.password} placeholder='Password'/>
            </div>
            <div>
                <input onChange={this.handleChange} name='firstName' type='text' 
                value={this.state.newUser.firstName} placeholder='First Name'/>
            </div>
            <div>
                <input onChange={this.handleChange} name='lastName' type='text'
                value={this.state.newUser.lastName} placeholder='Last Name'/>
            </div>    
            <div>
                <input onChange={this.handleChange} name='address' type='text'
                value={this.state.newUser.address} placeholder='Street/City/State/Zip'/>
            </div> 
            <button><Link to='/'>Home</Link></button>
            
            </form>
        </div>
        )
    } 
}
    export default UserRegistrationForm;