import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
class SignUp extends Component {
    render(){
        return(
            <Form>
                <h3 className="push">Create Account</h3>
            <FormGroup className="signup">
                <Input type="text" id="firstName" name="firstName" placeholder="First Name" innerRef={input => this.firstName = input}/>
            </FormGroup>
            <FormGroup className="signup">
                <Input type="text" id="lastName" name="lastName" placeholder="Last Name" innerRef={input => this.lastName = input}/>
            </FormGroup>
            <FormGroup className="signup">
                <Input type="password" id="password" name="password" placeholder="Password" innerRef={input => this.password = input} />
            </FormGroup>
            <FormGroup className="signup"> 
                <Input type="text" id="email" name="email" placeholder="Email" innerRef={input => this.email = input} />
            </FormGroup>
            <FormGroup className="signup">
                <div className="container">
                    <div className="row">
                        <Label className="resume">Upload Resume</Label>
                        <Input type="file" id="resume" name="resume" placeholder="Word or PDF" innerRef={input => this.resume = input} />
                    </div>
                </div>
            </FormGroup>
            <Button type="submit" value="submit" color="info">Sign Up</Button>
            <p className="disclaimer">By submitting your information, you consent to our sharing of your information with our clients and affiliates to support you in finding a job and to send you emails and text messages about jobs you may be interested in and other promotional emails. Please refer to the terms of our Applicant Privacy Policy for more information.</p>
        </Form>
        )
    }
}

export default SignUp
