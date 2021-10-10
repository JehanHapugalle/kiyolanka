import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import './LoginStyles.css'
import Logo from './image/logo.jpeg'

export default function Login() {

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const history = useHistory();

    const handleUsernameChange = (e) => {
        setUsernameInput(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let hardcodedCred = {
            username: 'admin',
            password: 'password123'
        }

        if ((usernameInput == hardcodedCred.username) && (passwordInput == hardcodedCred.password)) {
            const token = '123456abcdef';
            sessionStorage.setItem('auth-token', token);
            
            history.push('/home');
            window.location.reload();
        } else {
            alert('wrong username or password combination');
        }
    }

    return (

        <div className="container">

            <div class="eimage" >
                    <img src = {Logo} width = "150" alt="logo"/>
            </div>

            <div class="login">
                <h1> Kiyo Lanka CoCo Products PVT LTD </h1>
            </div>
                    
            <div class="loginsub">
                <h2> Login </h2>
            </div>

            <form autoComplete="off" onSubmit={handleLoginSubmit}>
                <div style={{width: "100%"}}>
                    <div class="form-group">

                    <label  for="Login Email"> Username </label>
                    <input type="text" class="form-control" id="loginusername" placeholder="Enter Username" aria-describedby="emailHelp" value={usernameInput} onChange={handleUsernameChange} required/>
                                
                    </div>

                    <div class="form-group">

                    <label  for="Login Password"> Password </label>
                    <input type="password" class="form-control" id="loginpassword" placeholder="Enter password" autoComplete="new-password" value={passwordInput} onChange={handlePasswordChange} required/>
                                
                    </div>

                    <button type="submit">
                        Login
                    </button>
                </div>
            </form>
            
        </div>
    );
}