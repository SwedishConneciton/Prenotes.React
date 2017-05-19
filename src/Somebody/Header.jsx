import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, FontIcon} from 'material-ui';


const printToConsole = (e) => { console.log('made it'); };

const UserIcon = <FontIcon className="material-icons" onClick={printToConsole}>account_circle</FontIcon>;

const Header = ({user, howManyNewNotifications}) => {
    return (
        <header>
            <AppBar
                title="Prenotes"
                showMenuIconButton={false}
                iconElementRight={UserIcon}
            />
        </header>
    );
};

export default Header;