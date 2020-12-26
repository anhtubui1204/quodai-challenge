import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import HighlightedListContainer from './pages/HighlightedListPage/HighlightedListPageContainer'

const routes = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={HomePageContainer}/>
            <Route exact path={"/highlighted-issues"} component={HighlightedListContainer}/>
        </Switch>
    )
}

export default routes
