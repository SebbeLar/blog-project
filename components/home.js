import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>ABOUT</h1>
                <button><Link to="/about">About</Link></button>
            </div>
        );
    }
}
