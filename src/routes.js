import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Wrapper from './components/Wrapper/wrapper';
import homeContainer from './containers/homeContainer';
import About from './components/About/about';
import landingPage from './components/LandingPage/landingPage';

export default (
    <Route path="/" component={Wrapper}>
        <IndexRoute component={landingPage} />
        <Route path="/home" component={homeContainer} />
        <Route path="/about" component={About} />
    </Route>
);
