import React, { Component } from 'react';
import axios from'axios'
import ChildShow from '../child/ChildShow'
import HomePage from '../home/HomePage'
import {Link} from 'react-router-dom'


class ParentShow extends Component {
    state={
        user:{
            userName:'',
            password:'',
            firstName:'',
            lastName:'',
            address:''
            
          
        }
    }
     async componentWillMount(){
        const {userId} = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({user: res.data})
    }
    render() {
        return (
            <div>
                <h1>Users Portal</h1>
                <div>
        
                <h2>{this.state.user.firstName} {this.state.user.lastName}</h2>
                <ul>
                    <li>User Name: {this.state.user.userName}</li>
                    <li>Password: {this.state.user.password}</li>
                    <li>Address: {this.state.user.address}</li>                  
                </ul> 
                <button><Link to='/'>Edit</Link></button>
                <button><Link to='/'>Delete</Link></button>
                </div>  
                
                
            </div>
        );
    }
}

export default ParentShow;