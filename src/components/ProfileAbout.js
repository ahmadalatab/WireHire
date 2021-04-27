import React from 'react';
import '../profile.scss';
import { User } from '../shared/UserProfile';

const About = () => {

    const aboutUser = User[0]['about'];

    return (
        aboutUser.map((info) => {
                return (
                    <div className="info text-center" key={info.id}>
                            <div className="align-items-center px-5 py-2 mb-2 header">
                                <div>
                                    <h2>{info.firstName} {info.lastName}</h2>
                                    <div>{info.email}</div>
                                    <div>{info.phoneNum}</div>
                                    <div>{info.location}</div>
                                </div>
                                <h2><i className="fa fa-pencil"></i></h2>
                            </div>
                    </div>
                )
        })
    )
}

export default About;