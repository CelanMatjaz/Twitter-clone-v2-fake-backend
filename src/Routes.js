import { Route, Switch } from 'react-router-dom'; 

import React from 'react';

//Components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Feed from './components/tweet/Feed';
import FeedProfile from './components/tweet/FeedProfile';
import AddTweet from './components/tweet/AddTweet';
import EditTweet from './components/tweet/EditTweet';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/" component={Feed}/>
            <Route exact path="/profile/:username" component={FeedProfile}/>
            <Route exact path="/add-tweet" component={AddTweet}/>
            <Route exact path="/edit-tweet/:id" component={EditTweet}/>
        </Switch>
    );
};

export default Routes;