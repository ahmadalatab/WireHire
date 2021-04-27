import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6 footer-items">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/jobs">Jobs</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6 text-center">
                        <h5 className="footer-items">Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram footer-items" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter footer-items" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://linkedin.com/"><i className="fa fa-linkedin footer-items" /></a>
                    </div>
                    <div className="col-md-4 col-sm-6 text-center">
                        <a role="button" className="btn btn-link" href="tel:+194912345678"><i className="fa fa-phone footer-items" /> 1-949-1234-5678</a><br />
                        <a role="button" className="btn btn-link " href="mailto:contact@wirehire.com"><i className="fa fa-envelope-o footer-items" /> contact@wirehire.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;