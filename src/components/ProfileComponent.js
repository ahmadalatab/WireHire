import React, {Component, useState} from 'react';
import {User} from '../shared/UserProfile';
import {} from 'reactstrap';

const Profile = () => {
    const [userDisplay, setUserDisplay] = useState(User);
    const display = JSON.stringify(userDisplay)
    return(
        <div>
            console.log({display})
        </div>
        
    );
}

export default Profile;