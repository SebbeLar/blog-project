import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Wrapper from './components/wrapper';
import homeContainer from './containers/homeContainer';
import About from './components/about';

export default (
    <Route path="/" component={Wrapper}>
        <IndexRoute component={homeContainer} />
        <Route path="/about" component={About} />
    </Route>
);
