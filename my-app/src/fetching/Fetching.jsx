import React from 'react';
import { Redirect } from 'react-router-dom';

class Fetching extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            datas: [],
            isi:true
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data => this.setState({datas:data,isi:false})).catch(err => console.log(err))
    }
    handleLogout = () => {
        localStorage.removeItem('token')

        this.props.history.push('/')
    }
    render(){
        if(localStorage.getItem('token') == null){
            return <Redirect to="/" />
        }
        console.log(this.state.datas)
        return(
            <div>
                <button onClick={this.handleLogout}>logout</button>
                {this.state.datas.map(param => {
                    return(
                        <div>
                            <h5>
                                {param.title}
                            </h5>
                            <p>
                                {param.body}
                            </p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Fetching;
