import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Jobs() {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className="jobs container">
            <h2>Easily Search and Apply</h2>
            <Row>
                <Form inline className="w-100">
                    <Col>
                        <FormGroup className="m-2">
                            <Label for="search" className="mr-2">Search</Label>
                            <Input type="text" name="search" id="search" className="mr-2"/>
                            <Button>Search</Button>
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <FormGroup className="m-2 text-right">
                            <Label for="sortby" className="mr-2">Sort By:</Label>
                            <Dropdown name="sortby" isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle caret>
                                    Sort By
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Date Ascending</DropdownItem>
                                    <DropdownItem>Relevant</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </FormGroup>
                    </Col>
                </Form>
            </Row>
        </div>
    );
}

export default Jobs;