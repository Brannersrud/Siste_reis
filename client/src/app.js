import React,{Component} from 'react';
import FrontPage from './components/frontpage';
import Loginform from './components/Loginform';
import Style from '../src/App.scss';
import AppRouter from '../src/router';
//import 'bulma/css/bulma.css';


const App = () => {
    return(
        <div>
            <Loginform/>
        </div>
    )
}

export default App;