import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/home';
import About from './components/about';

export default class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
            </Router>
        );
    }
}
