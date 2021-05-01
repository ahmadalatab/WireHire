import React from 'react';
import Experience from './ExperienceComponent';
import '../profile.scss';
import Education from './EducationComponent';
import About from './ProfileAbout';
import Skills from './SkillsComponent';

const Profile = () => {

    return(
        <div className="profile">
            <div className="aboutSection">
                <About />
            </div>
            <Experience />
            <Education />
            <Skills />
        </div>
        
    );
}

export default Profile;