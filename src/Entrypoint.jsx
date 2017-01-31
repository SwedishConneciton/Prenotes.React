import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import makeDerivable from './Derivable.jsx';
import Somebody from './Somebody/Main.jsx';
import Anybody from './Anybody/Main.jsx';
import {Routing as RoutingStore, Somebody as SomebodyStore} from './store';
import page from 'page';
import is from 'is_js';

/**
 *  Allow for touch events
 */
injectTapEventPlugin();



/**
 * Views
 */
const SomebodyDerivable = makeDerivable(Somebody, SomebodyStore);


/**
 * Routing
 */
const hasToken = (ctx, next) => {
    let token = sessionStorage['token'];

    if (is.string(token) && is.not.empty(token)) {
        next();
    } else {
        page('/Anybody')
    }
};

class Routing extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            component: <div /> 
        };
    }

    componentDidMount() {
        let self = this;

        let hasSignedIn = (ctx, next) => self.props.signedIn;

        page(
            '/',
            hasToken,
            hasSignedIn,
            (ctx) => page('/Somebody')
        );

        page(
            '/Anybody',
            (ctx) => self.state.component = <Anybody />
        );

        page(
            '/Somebody',
            hasToken,
            isSignedIn,
            (ctx) => self.state.component = <SomebodyDerivable />
        );

        page.start();
        page('/');
    }

    render() {
        return this.state.component;
    }
};


/**
 * Entrypoint
 */
const RoutingDerivable = makeDerivable(Routing, RoutingStore);

ReactDOM.render(
    <RoutingDerivable />,
    document.querySelector('main')
);