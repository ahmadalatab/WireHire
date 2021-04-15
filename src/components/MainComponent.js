import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Jobs from './JobsComponent';
import Header from './HeaderComponent';

class Main extends Component {

    render() {

        return (
            <>
                <Header />
                <Switch>
                    <Route exact path='/jobs' component={Jobs} />
                </Switch>
            </>
        );
    };
}

export default Main;