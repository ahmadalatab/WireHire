import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Row, Col, CustomInput } from 'reactstrap';
import '../jobs.scss';

const Search = ({keywordInput, keywordInputChanged, handleSearch, locationInput, locationInputChanged, handleSort}) => {

    return (
        <Row className="search">
            <h2 className="m-auto">Easily Search and Apply</h2>
            <Form inline className="w-100 mt-3">
                <Col>
                    <FormGroup className="m-2">
                        <Label for="search" className="mr-2 text-left">Search</Label>
                        <Input type="text" name="search" id="search" placeholder="Keywords" className="mr-2 w-30" value={keywordInput} onChange={keywordInputChanged} />
                        <br />
                        <Input type="text" name="search" id="search" placeholder="City, State" className="mr-2 w-30" value={locationInput} onChange={locationInputChanged} />
                        <br />
                        <Button onClick={e => handleSearch(e)}>Search</Button>
                    </FormGroup>
                </Col>
                <Col sm="4" className="ml-auto d-inline">
                    <FormGroup>
                        <CustomInput type="radio" defaultChecked='true' id="relevance" name="radioOption" value="relevance" label="Relevance" inline className="m-0" onClick={handleSort} />
                        <CustomInput type="radio" id="date" name="radioOption" value="date" label="Date" inline onClick={handleSort} />
                    </FormGroup>
                </Col>
            </Form>
        </Row>
    )
}

export default Search;