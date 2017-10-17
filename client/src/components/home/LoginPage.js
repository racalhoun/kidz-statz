import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <div>
                        <input name='userName' type='text' placeholder='User Name'/>
                        <input name='passwrod' type='text' placeholder='Password'/>
                        <button><Link to='/'>Submit</Link></button>
                    </div>
                </form>        
            </div>
        );
    }
}

export default LoginPage;