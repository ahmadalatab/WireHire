import React, {Component} from 'react';
import Search from './SearchComponent';
import '../jobs.scss';
import {Row, Col} from 'reactstrap';
import { Carousel } from "react-bootstrap";
import image1 from '../images/salaryguide.jpg';
import image2 from '../images/best-jobs-2021-badge-graphic.svg';
import image3 from '../images/skills.jfif';
import image4 from '../images/amazon.jfif';
import image5 from '../images/google2.jfif';
import image6 from '../images/microsoft.jfif';
import image7 from '../images/intel.jfif';

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
                {/* <div className="jobs">
                    <Search />
                </div> */}
                <div className="container">
                    <h2>Top Employers </h2>
                    <Row>
                        <Col>
                            <Carousel className="home-carousel" >
                                <Carousel.Item interval={5000}>
                                    <img
                                    className="d-block w-100"
                                    src={image4}
                                    alt="Amazon"
                                    />
                                <Carousel.Caption>
                                <p>World's largest online marketplace, AI assistant provider, live-streaming platform and cloud computing platform </p>
                                </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img
                                    className="d-block w-100"
                                    src={image5}
                                    alt="Google"
                                    />
                                <Carousel.Caption>
                                <p>World's largest online marketplace, AI assistant provider, live-streaming platform and cloud computing platform </p>
                                </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img
                                    className="d-block w-100"
                                    src={image6}
                                    alt="Microsoft"
                                    />
                                <Carousel.Caption>
                                <p>World's largest online marketplace, AI assistant provider, live-streaming platform and cloud computing platform </p>
                                </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1000}>
                                    <img
                                    className="d-block w-100"
                                    src={image7}
                                    alt="Intel"
                                    />
                                <Carousel.Caption>
                                <p>World's largest online marketplace, AI assistant provider, live-streaming platform and cloud computing platform </p>
                                </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>                
                </div>
                    
                <div className="container">
                    <Row>
                        <Col md={3}>
                            <Card style={{ width: '18rem'}}>
                                <CardImg  variant="top" src={image1}/>
                                <CardBody id="show-link">
                                    <CardTitle style={{ fontSize: "x-large"}}>2021 Salary Guide</CardTitle>
                                    <CardText>
                                        Get current compensation data and learn about emerging employment trends to help you hire new talent or land your next job.
                                    </CardText>
                                    <CardLink href="https://www.roberthalf.com/salary-guide">Salary Guide</CardLink>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={{size: 3, offset: 1}}>
                            <Card style={{ width: '18rem'}}>
                                <CardImg variant="top" src={image2}/>
                                <CardBody id="show-link">
                                    <CardTitle style={{ fontSize: "x-large"}}>100 Best Jobs</CardTitle>
                                    <CardText>
                                        Explore the best paying jobs and other more specific career rankings.
                                    </CardText>
                                    <CardLink href="https://money.usnews.com/careers/best-jobs/rankings/the-100-best-jobs">Jobs Guide</CardLink>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={{size: 3, offset: 1}}>
                            <Card style={{ width: '18rem'}}>
                                <CardImg variant="top" src={image3} />
                                <CardBody id="show-link">
                                    <CardTitle style={{ fontSize: "x-large"}}>Top 5 Skills Employers Look For</CardTitle>
                                    <CardText>
                                        Learn what skills employers look for before you commit to a college degree.
                                    </CardText>
                                    <CardLink href="https://newmanu.edu/top-5-skills-employers-look-for">Skills Guide</CardLink>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>


                </div>

            </React.Fragment>
        );
    }
}

export default Home;