import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Wrapper from './components/Wrapper/wrapper';
import homeContainer from './containers/homeContainer';
import About from './components/About/about';

export default (
    <Route path="/" component={Wrapper}>
        <IndexRoute component={homeContainer} />
        <Route path="/about" component={About} />
    </Route>
);
