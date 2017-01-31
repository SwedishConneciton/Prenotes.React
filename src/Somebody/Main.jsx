import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import nomut from 'immutable';


const Main= ({notifications, user}) => {
    return (
        <Grid>
            <Row center="xs">
                <Col xs={8} md={6}>Hello, world!</Col>
            </Row>
        </Grid>
    );
}

Main.propTypes = {
    notifications: React.PropTypes.instanceOf(nomut.Map).isRequired
};


Main.defaultTypes = {
    notifications: nomut.Map()
}


export default Main;