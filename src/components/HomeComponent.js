import React, {Component} from 'react';
import Search from './SearchComponent';
import '../jobs.scss';

import {Card, CardBody, CardImg, CardMedia, CardText, CardTitle, CardLink} from 'reactstrap';

class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');
                </style>
                <div className="container-fluid no-padding backgroundimage">
                    <div className="row">
                        <div className="col-md-3 top-left">
                            <div>Dream Jobs. Top Talent. All in One Place.</div>
                        </div>
                    </div>
                </div>
                <div className="jobs">
                    <Search />
                </div>
                <div className="container">
                    <Card style={{ width: '18rem'}}>
                        <CardImg variant="top" src="../images/salaryguide.jpg"/>
                        <CardBody>
                            <CardTitle style={{ fontSize: "larger"}}>2021 Salary Guide</CardTitle>
                            <CardText>
                                Get current compensation data and learn about emerging employment trends to help you hire new talent or land your next job.
                            </CardText>
                            <CardLink href="https://www.roberthalf.com/salary-guide">Salary Guide</CardLink>
                        </CardBody>
                    </Card>
                </div>

            </React.Fragment>
        );
    }
}

export default Home;