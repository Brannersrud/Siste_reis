import React from 'react';
import Loginform from './components/Loginform';
import Style from '../src/App.scss';
import AppRouter from '../src/router';
//import 'bulma/css/bulma.css';


const App = () => {
    return(
        <AppRouter>
            <Loginform/>
        </AppRouter>
    )
}

export default App;