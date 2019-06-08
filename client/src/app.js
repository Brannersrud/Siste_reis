import React,{Component} from 'react';
import FrontPage from './components/frontpage';
import Loginform from './components/Loginform';
import Style from '../src/App.scss';
import AppRouter from '../src/router';


const App = () => {
    return(
        <AppRouter>
            <Loginform/>
        </AppRouter>
      
    )
}

export default App;