import React, {Component} from 'react';
import Uploadform from './uploadform';

class Adminpage extends Component{

    render(){
        return(
            <main>
                <Uploadform history={this.props.history}/>
            </main>
        )
    }
}

export default Adminpage;