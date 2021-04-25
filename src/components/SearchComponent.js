import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Row, Col, CustomInput } from 'reactstrap';
import '../jobs.scss';

const Search = ({keywordInput, keywordInputChanged, handleSearch, locationInput, locationInputChanged, handleSort}) => {

    return (
        <Row className="search">
            <h2 className="m-auto">Easily Search and Apply</h2>
            <Form inline className="w-100 mt-3">
                <Col sm="12" lg="8">
                    <Label for="search" className="justify-content-start pl-2 pb-2 labelTitle">Search</Label>
                    <FormGroup>
                        <Input type="text" name="search" id="search" placeholder="Keywords" className="mr-2 mb-2 mb-lg-0" value={keywordInput} onChange={keywordInputChanged} />
                        <Input type="text" name="search" id="search" placeholder="City, State" className="mr-2 mb-2 mb-lg-0" value={locationInput} onChange={locationInputChanged} />
                        <Button className="mb-2 mb-lg-0" onClick={e => handleSearch(e)}>Search</Button>
                    </FormGroup>
                </Col>
                <Col sm="12" lg="4" className="ml-auto d-inline">
                    <Label for="radioOption" className="justify-content-start pl-2 pb-2 labelTitle">Sort</Label>
                    <FormGroup>
                        <CustomInput type="radio" defaultChecked='true' id="relevance" name="radioOption" value="relevance" label="Relevance" inline className="m-0 p-0" onClick={handleSort} />
                        <CustomInput type="radio" id="date" name="radioOption" value="date" label="Date" inline className="m-0 p-0 ml-2" onClick={handleSort} />
                    </FormGroup>
                </Col>
            </Form>
        </Row>
    )
}

export default Search;