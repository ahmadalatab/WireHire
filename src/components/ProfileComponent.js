import React from 'react';
import Experience from './ExperienceComponent';
import '../profile.scss';

const Profile = () => {

    return(
        <div className="profile">
            <div className="experiencesSection">
                <div className="align-items-center px-5 header">
                    <h2>Experience</h2>
                    <h2><i className="fa fa-pencil"></i></h2>
                </div>
                <Experience />
            </div>
        </div>
        
    );
}

export default Profile;