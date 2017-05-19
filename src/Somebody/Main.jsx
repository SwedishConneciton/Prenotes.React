import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import nomut from 'immutable';
import Feed from './Feed.jsx';
import Header from './Header.jsx';
import Profile from './Profile.jsx';
import Widgets from './Widgets.jsx';


const Main= ({notifications, user}) => {
    return (
        <main>
            <Header user={user} howManyNewNotifications={notifications.length} />
            <Grid>
                <Row center="xs">
                    <Col xs={0} md={3}>
                        <Profile />
                    </Col>
                    <Col xs={8} md={6}>
                        <Feed notifications={notifications} />
                    </Col>
                    <Col xs={0} md={3}>
                        <Widgets />
                    </Col>
                </Row>
            </Grid>
        </main>
    );
}

Main.propTypes = {
    notifications: PropTypes.instanceOf(nomut.Map).isRequired,
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        children: PropTypes.instanceOf(nomut.Map),
        schools: PropTypes.instanceOf(nomut.Map)
    }).isRequired
};


Main.defaultProps = {
    notifications: nomut.Map()
};


export default Main;