import React,{Component} from 'react';
import Uploadform from './components/uploadform';
import Loginform from './components/Loginform';
import Style from '../src/App.scss';


const App = () => {
    return(
        <div>
            <Uploadform/>
            <Loginform/>
        </div>
    )
}

export default App;