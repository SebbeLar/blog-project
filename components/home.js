import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import styles from './home.css';

const Home = ({ value, increment, decrement }) => {
    return (
        <div>
        <h1>ABOUT</h1>
            <button><Link to="/about">About</Link></button>
            <br/>
            <div>
                <h2>{value}</h2>
                <button
                    id="test"
                    className={styles.button}
                    onClick={e => {
                        e.preventDefault();
                        increment();
                    }}
                >+
                </button>
                <Button
                    bsStyle="danger"
                    onClick={e => {
                        e.preventDefault();
                        decrement();
                    }}
                >-
                </Button>
            </div>
        </div>
    );
};

Home.propTypes = {
    value: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func
};

export default Home;
