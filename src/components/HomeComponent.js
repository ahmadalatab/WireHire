import React from 'react';
import '../jobs.scss';
import {Row, Col, Button} from 'reactstrap';
import { Carousel } from "react-bootstrap";
import image1 from '../images/salaryguide.jpg';
import image2 from '../images/best-jobs-2021-badge-graphic.svg';
import image3 from '../images/skills.jfif';
import image5 from '../images/google2.jpg';
import image6 from '../images/microsoft2.jpg';
import image7 from '../images/intel2.jpg';
import image8 from '../images/amazon2.jpg';

import {Card, CardBody, CardImg, CardMedia, CardText, CardTitle, CardLink} from 'reactstrap';


const Home = () => {
        return(
            <React.Fragment>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');
                </style>
                <div className="container-fluid no-padding backgroundimage">
                    <div className="row h-100 align-items-center">
                        <div className="col-md-6 top-content align-items-center">
                            <div style={{ fontSize: 'xx-large' }} >Dream Jobs. Top Talent. All in One Place.</div>
                            <br />
                            <p style={{ fontSize: 'large' }}>The right IT Staffing & Managed Solutions partner is here and ready to transform the horizon with empowering new possibilities.</p>
                            <br />
                            <Button href="/jobs"> Find a Job </Button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2 className="home-employers">Top Employers </h2>
                    <Row>
                        <Col>
                            <Carousel className="home-carousel" >
                                <Carousel.Item interval={5000}>
                                    <img
                                    className="d-block w-100"
                                    src={image8}
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
                                <p>Specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware </p>
                                </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img
                                    className="d-block w-100"
                                    src={image6}
                                    alt="Microsoft"
                                    />
                                <Carousel.Caption>
                                <p>Develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. </p>
                                </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1000}>
                                    <img
                                    className="d-block w-100"
                                    src={image7}
                                    alt="Intel"
                                    />
                                <Carousel.Caption>
                                <p>Engages in the design, manufacture, and sale of computer products and technologies </p>
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

export default Home;