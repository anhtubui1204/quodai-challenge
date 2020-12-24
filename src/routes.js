import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePageContainer from './pages/HomePage/HomePageContainer';

const routes = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={HomePageContainer}/>
        </Switch>
    )
}

export default routes
