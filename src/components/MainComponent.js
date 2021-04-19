import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './HomeComponent';
import Jobs from './JobsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

    render() {

        return (
            <>
                <Header />              
                <Switch>        
                    <Route exact path='/' component={Home} />
                    <Route exact path='/jobs' component={Jobs} />
                </Switch>
                <Footer />
            </>
        );
    };
}

export default Main;