import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routing from './Routing.jsx';

/**
 *  Allow for touch events
 */
injectTapEventPlugin();


ReactDOM.render(
    <Routing />,
    document.querySelector('main')
);
