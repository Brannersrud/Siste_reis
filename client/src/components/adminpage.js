import React, {Component} from 'react';
import Uploadform from './uploadform';

class Adminpage extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <main>
                <Uploadform/>
            </main>
        )
    }
}

export default Adminpage;