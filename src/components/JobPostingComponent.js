import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

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
                <div id="description" className="truncate">
                    {props.description}
                </div>
            </Row>
            <Row>
                <Link to={`/jobs/${props.id}`}>Read more</Link>
            </Row>
        </div>
    )
}

export default JobPosting;