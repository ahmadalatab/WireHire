import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Jobs from './JobsComponent';
import Header from './HeaderComponent';
import JobsInfo from './JobsInfoComponent';

class Main extends Component {

    render() {

        return (
            <>
                <Header />
                <Switch>
                    <Route exact path='/jobs' component={Jobs} />
                    <Route path="/jobs/:id" component={JobsInfo} />
                </Switch>
            </>
        );
    };
}

export default Main;