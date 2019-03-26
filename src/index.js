import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';

import App from './App';
import {isAuthenticated} from './componentes/Auth'
import Login from './componentes/Login';
import Logout from './componentes/Logout';

function PrivateRoute({ component: Component, ...rest })
{
    return(
        <Route 
            {...rest} 
            render={props => isAuthenticated() ? ( 
                <Component {...props} /> 
            ) : ( 
                <Redirect 
                    to={{ pathname: "/", 
                           state:{ from:props.location} 
                        }} />
                    )
                }
        />        
    );
}


// First commit
ReactDOM.render(
    <Router >
        <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/timeline" component={App} />
            <Route path="/logout" component={Logout} />
        </Switch>
    </Router>
    
    , document.getElementById('root'));

