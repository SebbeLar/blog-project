import React, { PropTypes } from 'react';

class Wrapper extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

Wrapper.propTypes = {
    children: PropTypes.element
};

export default Wrapper;
