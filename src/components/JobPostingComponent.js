import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import Truncate from 'react-truncate';

const JobPosting = (props) => {
    return (
        <div className="job-posting text-left">
            <Row>
                <Col className="p-0 font-weight-bold job-posting-role">Role: {props.role}</Col>
                <Col className="text-right">Posted: {props.date}</Col>
            </Row>
            <Row>
                <div className="job-posting-location">{props.location}</div>
            </Row>
            <Row>
                <div id="description">
                <Truncate lines={3}>
                    {props.description}
                </Truncate>
                </div>
            </Row>
            <Row>
                <Link to={`/jobs/${props.id}`}>Read more</Link>
            </Row>
        </div>
    )
}

export default JobPosting;