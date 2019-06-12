<<<<<<< HEAD
import React,{Component} from 'react';
=======
import React from 'react';
import Loginform from './components/Loginform';
>>>>>>> 136ac9a1ad860820b00fce70984e885cd9597fc3
import Style from '../src/App.scss';
import AppRouter from '../src/router';
import 'bulma/css/bulma.css';

import FrontPage from './components/frontpage';
import Loginform from './components/Loginform';
import uploadform from './components/uploadform';
import Navbar from './components/Navbar';


const App = () => {
    return(
<<<<<<< HEAD
        <div>
            <Navbar />
=======
        <AppRouter>
>>>>>>> 136ac9a1ad860820b00fce70984e885cd9597fc3
            <Loginform/>
        </AppRouter>
    )
}

export default App;