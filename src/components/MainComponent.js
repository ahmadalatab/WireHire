import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './HomeComponent';
import Jobs from './JobsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Profile from './ProfileComponent';
import JobsInfo from './JobsInfoComponent';
import SignUp from './SignUpComponent';

class Main extends Component {

    render() {

        return (
            <>
                <Header />              
                <Switch>        
                    <Route exact path='/' component={Home} />
                    <Route exact path='/jobs' component={Jobs} />
                    <Route path="/jobs/:id" component={JobsInfo} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/signup" exact component={SignUp} />
                </Switch>
                <Footer />
            </>
        );
    };
}

export default Main;