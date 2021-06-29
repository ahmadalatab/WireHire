import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import '../profile.scss';
import { User } from '../shared/UserProfile';
import { ExperienceModal } from './ProfileModal';


const Experience = (props) => {

    // modal related
    const [modalID, setModalID] = useState(null);
    const toggleModal = (e, idx) => setModalID(idx);
    const [modal, setModal] = useState(false);
    const toggleAddForm = () => setModal(!modal);

    // experience form values
    const experienceValues = {
        title: "",
        company: "",
        description: ""
    };
    const [experience, setExperience] = useState(experienceValues);

    // data from backend
    const [expData, setExpData] = useState(props.experience);

    const handleChange = (e) => {
        setExperience(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const fetchData = async () => {
        try {
          let username = "johndoe";
          const result = await fetch(`profile/${username}`);
          const body = await result.json();
          setExpData(body[0].experience);
        } catch (err) {
          console.error("Error:", err);
        }
      };

    const handleSubmit = (e, experienceId = null) => {
        e.preventDefault();
        let username = 'johndoe';
        const settings = {
            method: experienceId ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(experience)
        };
        const url = experienceId ? 
            `http://localhost:3001/profile/${username}/experience/${experienceId}`
            : `http://localhost:3001/profile/${username}/experience`; 

        console.log(url);

        fetch(url, settings)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                experienceId ? toggleModal() : toggleAddForm();
                fetchData();
                return data;
            })
            .catch(error => {
                console.log(error)
            })  
    }

    const deleteItem = (e, experienceId) => {
        e.preventDefault();
        let username = 'johndoe';
        fetch(`http://localhost:3001/profile/${username}/experience/${experienceId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                fetchData();
                return data;
            })
            .catch(error => {
                console.log(error)
            }) 
    }

    return (
        <div className="experiencesSection">
            <div className="align-items-center px-sm-2 py-2 mb-2 header">
                <h2>Experience</h2>
                <h2><i className="fa fa-plus" onClick={toggleAddForm}></i></h2>
                <ExperienceModal
                    isOpen={modal}
                    toggle={toggleAddForm}
                    action="Add"
                    handleChange={handleChange}
                    submit={handleSubmit}
                />
            </div>
            {expData.length > 0 ?
                expData.map((experience, idx) => {
                    return (
                        <div className="experience text-left" key={idx}>
                        <Row className="my-2 mx-0 w-100">
                            <Col xs={7} lg={5} className="p-0 font-weight-bold">{experience.company}</Col>
                            <Col xs={{ order: 3 }} md={{ order: 2 }} className="p-0 col-xs-5 col-lg-5 text-lg-center">{experience.startDate} - {experience.endDate}</Col>
                            <Col lg={{ order: 3 }} className="p-0 col text-right">
                                <i className="fa fa-pencil px-2" onClick={e => toggleModal(e, idx)}></i>
                                <i className="fa fa-times px-2" onClick={e => deleteItem(e, experience._id)}></i>
                            </Col>
                        </Row>
                        <Row className="mb-2 mx-0">{experience.title}</Row>
                        <Row className="mb-2 mx-0">
                            {experience.responsibilites}
                        </Row>
                        <ExperienceModal
                            isOpen={modalID === idx}
                            toggle={toggleModal}
                            action="Edit"
                            company={experience.company}
                            title={experience.title}
                            startDate={experience.startDate}
                            endDate={experience.endDate}
                            description={experience.description}
                            handleChange={handleChange}
                            submit={e => handleSubmit(e, experience._id)}
                        />
                    </div>
                    )
                })
                :
                <div className="py-4">No work experience to display</div>
            }
        </div>
    )
}

export default Experience;