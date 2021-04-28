import React from 'react';
import { Badge } from 'reactstrap';
import '../profile.scss';
import { User } from '../shared/UserProfile';

const Skills = () => {

    const skills = User[0]['skills'];

    return (
        <div className="skillsSection">
            <div className="align-items-center px-sm-2 py-2 mb-2 header">
                <h2>Skills</h2>
                <h2><i className="fa fa-plus"></i></h2>
            </div>
            <div className="skills text-left">
                <div className="d-flex justify-content-center align-items-center flex-wrap mb-3">
                    {skills.map((skills, idx) => {
                        if (Object.keys(skills).length !== 0) {
                            return (
                                <h5 key={idx} className="m-2"><Badge color="secondary">{skills}</Badge></h5>
                            )
                        }
                        else {
                            return <div className="py-4">No skills to display</div>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills;