import { Row, Col, Button } from 'reactstrap';

const FullJobPosting = (props) => {
    return (
        <div className="job-posting-full text-left">
            <Row>
                <Col className="p-0 font-weight-bold"><h2>Role: {props.role}</h2></Col>
                <Button color="primary">Apply</Button>
            </Row>
            <Row>
                <p>Posted: {props.date}</p>
            </Row>
            <Row>
                <div id="description">
                    {props.description}
                </div>
            </Row>
        </div>
    )
}

export default FullJobPosting;