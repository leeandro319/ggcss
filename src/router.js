import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Home from './components/Pages/Home'
import Border from './components/Pages/Border'
import BorderRadius from './components/Pages/BorderRadius'
import BoxShadow from './components/Pages/BoxShadow'
import TextShadow from './components/Pages/TextShadow'
import Transform from './components/Pages/Transform'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/border" component={Border} />
                <Route exact path="/borderradius" component={BorderRadius} />
                <Route exact path="/boxshadow" component={BoxShadow} />
                <Route exact path="/textshadow" component={TextShadow} />
                <Route exact path="/transform" component={Transform} />
            </Switch>
        </BrowserRouter>
    );
}
