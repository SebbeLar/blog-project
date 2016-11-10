import React, { PropTypes } from 'react';

const Counter = props => {
    return (
        <div>
            <h2>{props.value.values.homeValue}</h2>
            <button onClick={props.increment}>+</button>
            <button>-</button>
        </div>
    );
};

Counter.propTypes = {
    value: PropTypes.object,
    increment: PropTypes.func
};
export default Counter;
