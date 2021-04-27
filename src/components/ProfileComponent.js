import React from 'react';
import Experience from './ExperienceComponent';
import '../profile.scss';
import Education from './EducationComponent';
import About from './ProfileAbout';

const Profile = () => {

    return(
        <div className="profile">
            <div className="aboutSection">
                <About />
            </div>
            <div className="experiencesSection">
                <div className="align-items-center px-5 py-2 mb-2 header">
                    <h2>Experience</h2>
                    <h2><i className="fa fa-plus"></i></h2>
                </div>
                <Experience />
            </div>
            <div className="educationSection">
                <div className="align-items-center px-5 py-2 header">
                    <h2>Education</h2>
                    <h2><i className="fa fa-plus"></i></h2>
                </div>
                <Education />
            </div>
        </div>
        
    );
}

export default Profile;