import React from 'react';
import Style from '../src/App.scss';
import AppRouter from '../src/router';
import 'bulma/css/bulma.css';

import FrontPage from './components/frontpage';
import Loginform from './components/Loginform';
import uploadform from './components/uploadform';
import Navbar from './components/Navbar';


const App = () => {
    return(
        <div>
            <Navbar />
        <AppRouter>
            <Loginform/>
        </AppRouter>
        </div>
    )
}

export default App;