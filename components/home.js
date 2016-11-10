import React from 'react';
import { Link } from 'react-router';
import { store } from '../app';
import Counter from './counter';

export default class Home extends React.Component {
    constructor() {
        super();
    }
    increment() {
        console.log('PRESSED!');
        store.dispatch({type: 'INCREMENT'});
    }
    render() {
        return (
            <div>
                <h1>ABOUT</h1>
                <button><Link to="/about">About</Link></button>
                <br/>
                <Counter value={store.getState()} increment={this.increment.bind(this)}/>
            </div>
        );
    }
}
