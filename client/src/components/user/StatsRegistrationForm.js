import React, {Component} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import ChildRegistrationForm from './ChildRegistrationForm'
import moment from 'moment'

class StatsRegistrationForm extends Component{
    state={
        newStat:{
            sport:{
                name:'',
                teamName:'',
                location:'',
                playerRating:'',
            },
            position:{
                one:'',
                two:'',
            },
            datePlayed:'',
            descripton:''
        },
        redirecttoStatsView: false
    }
    handleChange = (event)=>{
        const attribute = event.target.name
        const updatedStat = {...this.state.newStat}
        updatedStat[attribute] = event.target.value
        this.setState({newStat: updatedStat})
    }
    handleSubmit = async (event)=>{
        event.preventDefault();
        console.log("handleSubmit")
        const res = await axios.post('/api/children/:childId/stats',{
            stats: this.state.newStat,
            childId: this.props.match.params.childId
        })
        this.setState({redirecttoStatsView: true})
    }

    render(){
        // if(this.state.redirecttoStatsView){
        //     return<Redirect to={`/children/${this.props.match.params.childId}/stats`} />
        // }
        return(
            <div>
                <h1>Add Kidz Statz</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={this.handleChange} name='name' type='text'
                        value={this.state.newStat.name} placeholder='Name of Sport'/>
                    </div>
                    <div>
                        <input onChange={this.handleChange} name='teamName' type='text'
                        value={this.state.newStat.teamName} placeholder='Name of Team'/>
                    </div>
                    <div>
                        <input onChange={this.handleChange} name='location' type='text'
                        value={this.state.newStat.location} placeholder='Game Location'/>
                    </div>
                    <div>
                        <input onChange={this.handleChange} name='playerRating' type='text'
                        value={this.state.newStat.playerRating} placeholder='Player Rating'/>           
                    
                        <input onChange={this.handleChange} name='one' type='text'
                        value={this.state.newStat.one} placeholder='Position Played'/>
                    </div>
                    <div>
                        <input onChange={this.handleChange} name='two' type='text'
                        value={this.state.newStat.two} placeholder='2nd Position Played'/>
                    </div>
                    <div>
                        <input onChange={this.handleChange} name='datePlayed' type='date'
                        value={this.state.newStat.datePlayed} placeholder='Game Date'/>
                    </div>
                    <div>
                        <input onChange={this.handleChange} name='description' type='text'
                        value={this.state.newStat.description} placeholder='Breakdown of Game'/>
                    </div>
                    <input type="submit" value="submit" />
                </form>     
            </div>
          )   
        }
    }
export default StatsRegistrationForm;
