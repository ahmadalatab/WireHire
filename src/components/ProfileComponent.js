import React, { useState, useEffect } from "react";
import Experience from "./ExperienceComponent";
import "../profile.scss";
import Education from "./EducationComponent";
import About from "./ProfileAbout";
import Skills from "./SkillsComponent";

const Profile = () => {
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    console.log("ready to fetch");

    const fetchProfileData = async () => {
      try {
        let username = "johndoe";
        const result = await fetch(`profile/${username}`);
        const body = await result.json();
        console.log(body);
        setUserProfile(body);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchProfileData();
  }, []);

  if (userProfile.length !== 0) {
      console.log(userProfile);
    return (
      <div className="profile">
        <div className="aboutSection">
          <About profile={userProfile} />
        </div>
        <Experience experience={userProfile[0].experience} />
        <Education education={userProfile[0].education} />
        {/* <Skills /> */}
      </div>
    );
  } 
  else {
    return null;
  }
};

export default Profile;
