import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Loginform from './components/Loginform';
import FrontPage from './components/frontpage';
import Adminpage from './components/adminpage';


const AppRouter = () => {
    return(
        <Router>
            <Route exact path="/" component={FrontPage}/>
            <Route path="/login" component={Loginform}/>
            <Route path="/adminview" component={Adminpage}/> 
        </Router>
    )
}

export default AppRouter;