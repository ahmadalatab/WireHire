import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/jobs">Jobs</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://linkedin.com/"><i className="fa fa-linkedin" /></a>
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+194912345678"><i className="fa fa-phone" /> 1-949-1234-5678</a><br />
                        <a role="button" className="btn btn-link" href="mailto:contact@wirehire.com"><i className="fa fa-envelope-o" /> contact@wirehire.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;