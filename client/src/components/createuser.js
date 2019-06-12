import React, {Component} from 'react';
export default class Creatuser extends Component{
    constructor(props){
        super(props);
        this.state={
            'username':'',
            'password':'',
            'repeatedpassword':''
        }
    }

    handlePasswordChange= (e) => this.setState({password:e.target.value});
    handlePasswordRepeat= (e) => this.setState({repeatedpassword:e.target.value});
    handleUserNameChange = (e) => this.setState({username:e.target.value});


    handleUserCreation(e){
        const {password, repeatedpassword} = this.state;
        
        if(password === repeatedpassword){
        fetch("/user/createUser", {
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
        })

        }
    }
    render(){

        console.log(this.state);
        return(
            <form>
            <legend>Create user</legend>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handleUserNameChange}/>

                <label>Password</label>
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                <label>Repeat password</label>    
                <input type="password" value={this.state.repeatedpassword} onChange={this.handlePasswordRepeat}/>
                {this.state.password === this.state.repeatedpassword ? <p>Matching password</p> : <p>try typing the passwords again</p>}
                
                <button onClick={this.handleUserCreation.bind(this)} >Create user</button>
            </form>
        )
    }
}

