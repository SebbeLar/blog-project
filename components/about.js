import React from 'react';
import { Link } from 'react-router';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <h1>HOME</h1>
                <button><Link to="/">Home</Link></button>
                <br/>
                <div>
                    <h2>0</h2>
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
        );
    }
}
