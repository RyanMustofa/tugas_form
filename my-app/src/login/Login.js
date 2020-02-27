import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './login.css';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = { email:'',password:'',token:'' }
    }
    changeHandle = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        },() => console.log(this.state))
    }
    submitHandle = (e) => {
        e.preventDefault();
        const data = {
            username:this.state.email,
            password:this.state.password
        }
        axios.post("https://penjualanapp-api.herokuapp.com/api/v1/auth/login",data).then(res => {
            localStorage.setItem('token',this.state.token)
            this.setState({
            token:res.data.data.token,
                isi:false
            },() => console.log(this.state.token))}).catch(err => this.setState({ isi:true }))
    }
    render(){
        if(localStorage.getItem('token')){
            return <Redirect to="/home" />
        }else if(this.state.isi == true){
            return <h1> incorect </h1>
        }
        return(
            <div className="luar">
            <div className="kotak">
                <form onSubmit={this.submitHandle}>
                    <label>email</label>
                    <input className="input" type="text" name="email" onChange={this.changeHandle} />
                    <label>password</label>
                    <input className="input" type="password" name="password" onChange={this.changeHandle} />
                    <center>
                    <button className="button"  type="submit">Login</button>
                    </center>
                </form>
            </div>
            </div>
        )
    }
}

export default Login;
