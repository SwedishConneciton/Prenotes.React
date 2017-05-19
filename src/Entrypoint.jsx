import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routing from './Routing.jsx';

/**
 *  Allow for touch events
 */
injectTapEventPlugin();


ReactDOM.render(
    <MuiThemeProvider><Routing /></MuiThemeProvider>,
    document.querySelector('main')
);
