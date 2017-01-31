import derivable from 'derivable';
import nomut from 'immutable';
import is from 'is_js';


// Atoms
const Notifications = derivable.atom(nomut.Map());
const User = derivable.atom({});


// Derivables 
const SignedIn = User.derive(v => is.not.empty(v));


// Derivations (the bundled state for root component in React)
const Somebody = derivable.derivation(() => {
    return {
        notifications: Notifications.get(),
        user: User.get()
    };
});

const Routing = derivable.derivation(() => {
    return {
        signedIn: SignedIn.get()
    };
});



export {Somebody, Routing};