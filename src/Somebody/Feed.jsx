import React from 'react';
import PropTypes from 'prop-types';

const Feed = ({notifications}) => {
    var feeds = notifications
    .map((n) => {
        return <div className="notification">Hello</div>;
    })
    .toArray();

    return (
        <section>
            {feeds}
        </section>
    );
};


export default Feed;