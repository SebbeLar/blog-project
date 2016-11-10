import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Wrapper from './components/wrapper';
import Home from './components/home';
import About from './components/about';

export default (
    <Route path="/" component={Wrapper}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
    </Route>
);
