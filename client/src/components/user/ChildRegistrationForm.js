import React, { Component } from 'react';
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import UserRegistrationForm from './UserRegistrationForm'
import StatsRegistrationForm from './StatsRegistrationForm'


class ChildRegistrationForm extends Component {
    state={
        newChild:{
            firstName:'',
            lastName:'',
            age:'',
            height:'',
            weight:'',
            stats:[]
        },
         redirecttonewStat: false
    }
    handleChange = (event)=>{
        const attribute = event.target.name
        const updatedChild = {...this.state.newChild}
        updatedChild[attribute] = event.target.value
        this.setState({newChild: updatedChild})
    }
    handleSubmit = async (event)=>{
        event.preventDefault()
        const res = await axios.post('/api/children',{
            child: this.state.newChild
        })
        console.log(res)
        this.setState({redirecttonewStat: true, newChildId: res.data._id})
    }

    render() {
       if(this.state.redirecttonewStat){
           return<Redirect to={`/stats/${this.state.newChild._id}`}/>
       }
        return (
        <div>
            <h1>Register your Child</h1>
            <form onSubmit={this.handleSubmit}>
            <div>
                <input onChange={this.handleChange} name='firstName' type='text'
                value={this.state.newChild.firstName} placeholder='First Name'/>
            </div>
            <div>
                <input onChange={this.handleChange} name='lastName' type='text'
                value={this.state.newChild.lastName} placeholder='Last Name'/>
            </div>
            <div>
                <input onChange={this.handleChange} name='age' type='number'
                value={this.state.newChild.age} placeholder='Age'/>
            </div>
            <div>
                <input onChange={this.handleChange} name='height' tupe='text'
                value={this.state.newChild.height} placeholder='Height'/>
            </div>
            <div>
                <input onChange={this.handleChange}  name='weight' type='text'
                value={this.state.newChild.weight} placeholder='Weight'/>
            </div>
            <button><Link to='/'>Home</Link></button>
            </form>
        </div>
        );
    }}

export default ChildRegistrationForm;
