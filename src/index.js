import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {compose, createStore, applyMiddleware} from 'redux';


import { combineReducers } from 'redux';

// material ui
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './app/assets/ui/themes/theme';
import Login from './app/login/containers';
import Dboard from './app/test/containers'
import mainReducer from './app/test/reducers';
import loginReducer from './app/login/reducers';

//middlewares
import { sessionService,sessionReducer } from 'redux-react-session';
import thunk from 'redux-thunk';
import { BrowserRouter  , Route} from 'react-router-dom';


import ValidateSession from './app/login/actions/validateSession';

const reducers=combineReducers({mainReducer,loginReducer,sessionReducer});
const store = createStore(
    reducers,
    compose(applyMiddleware(thunk))
);

// for initiating the session
const options = { refreshOnCheckAuth: true, redirectPath: '/', driver: 'COOKIES', ValidateSession };


//

sessionService.initSessionService(store,options);
//check for user login
ValidateSession(store);
//

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
        <BrowserRouter >
            <div>

          <Route exact path='/' component={Dboard} />
          <Route exact path='/dboard/:route' component={Dboard} />
          <Route exact path='/dboard/admin/:route' component={Dboard} />
          <Route exact path='/login' component={Login} />

              </div>
        </BrowserRouter>


        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
