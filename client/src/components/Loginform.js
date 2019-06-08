import React, {Component} from 'react';


class Loginform extends Component {
    constructor(props) {
        super(props); 

        this.state={
            'username': '',
            'password': ''
        }
    }

    render(){
        return(
            <div>
            <div class="field">
            <div class="control">
                <input class="input is-medium" type="text" placeholder="Normal input" />
            </div>
            </div>
            </div>
            
        )
    }
}

export default Loginform;