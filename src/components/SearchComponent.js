import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Row, Col, CustomInput } from 'reactstrap';
import '../jobs.scss';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: true
        };
    }
    
    render() {
        return (
            <Row className="search">
                <h2 className="m-auto">Easily Search and Apply</h2>
                <Form inline className="w-100">
                    <Col>
                        <FormGroup className="m-2">
                            <Label for="search" className="mr-2 text-left">Search</Label>
                            <Input type="text" name="search" id="search" placeholder="Keywords" className="mr-2 w-30"/>
                            <br />
                            <Input type="text" name="search" id="search" placeholder="City, State" className="mr-2 w-30"/>
                            <br />
                            <Button>Search</Button>
                        </FormGroup>
                    </Col>
                    <Col sm="4" className="ml-auto">
                        <FormGroup className="m-2">
                            <CustomInput type="radio" id="date-ascending" name="radioOption" label="Date Ascending" inline />
                            <CustomInput type="radio" defaultChecked={this.state.checked} id="relevance" name="radioOption" label="Relevance" inline />
                        </FormGroup>
                    </Col>
                </Form>
            </Row>
        );
    }
    
}

export default Search;