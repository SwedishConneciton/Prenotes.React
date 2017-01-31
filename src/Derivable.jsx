import React from 'react';


// Helper for Derivable(js)
const makeDerivable = (Wrapped, Derivation) => {
    class Derivable extends React.Component {
        constructor() {
            super();

            this.state = Derivation.get();
        }

        componentWillMount() {
            this.Reactor = Derivation
                .reactor(v => {
                    this.setState(v);
                });
            this.Reactor.start();
        }

        componentWillUnmount() {
            this.Reactor.stop();
        }

        render() {
            return (
                <Wrapped {...this.state} />
            );
        }
    }

    return Derivable;
};


export default makeDerivable;