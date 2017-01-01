import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Grid, Row, Col} from 'react-flexbox-grid';


/**
 *  Allow for touch events
 */
injectTapEventPlugin();


ReactDOM.render(
    <Grid>
        <Row center="xs">
            <Col xs={8} md={6}>Hello, world!</Col>
        </Row>
    </Grid>,
    document.querySelector('main')
);