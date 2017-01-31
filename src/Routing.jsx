import React from 'react';
import ReactDOM from 'react-dom';
import makeDerivable from './Derivable.jsx';
import Somebody from './Somebody/Main.jsx';
import Anybody from './Anybody/Main.jsx';
import Wipeout from './Wipeout.jsx';
import {Routing as RoutingStore, Somebody as SomebodyStore} from './store';
import page from 'page';
import is from 'is_js';



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

        let hasSignedIn = (ctx, next) => {
            if (self.props.signedIn) {
                next();
            } else {
                page('/Wipeout');
            }
        }

        page(
            '/',
            hasToken,
            hasSignedIn,
            (ctx) => page('/Somebody')
        );

        page(
            '/Anybody',
            (ctx) => self.setState({component: <Anybody />})
        );

        page(
            '/Somebody',
            hasToken,
            hasSignedIn,
            (ctx) => self.setState({component: <SomebodyDerivable />})
        );

        page(
            '/Wipeout',
            (ctx) => self.setState({component: <Wipeout />})
        )

        page.start();
        page('/');
    }

    render() {
        return this.state.component;
    }
};


const RoutingDerivable = makeDerivable(Routing, RoutingStore);

export default RoutingDerivable;