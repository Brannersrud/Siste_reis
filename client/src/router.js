import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loginform from './components/Loginform';
import FrontPage from './components/frontpage';
import Adminpage from './components/adminpage';
import Nopage from './components/404page';
import Createuser from './components/createuser';
import store from 'store';

const AppRouter = () => {
    return(
        <Router>
        <Switch>
            <Route exact path="/" component={FrontPage}/>
            <Route path="/login" component={Loginform}/>
            {store.get('username') === undefined ?
                <Route path="/adminview" component={Nopage}/>
                :
                <Route path="/adminview" component={Adminpage}/>
            }
            <Route path="/createuser" component={Createuser}/>
            <Route component={Nopage}/>
            </Switch>
        </Router>
    )
}

export default AppRouter;