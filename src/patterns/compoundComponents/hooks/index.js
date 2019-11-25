import React, { Component } from 'react';
import UserCV from './api';
import profileData from './data/profileData';

class UserProfile extends Component {
    render() {
        return (
            <div style={{ width: '350px', margin: '0 auto'}}>
                <UserCV user={profileData}>
                    <UserCV.Social/>
                    <UserCV.Profile/>
                    <UserCV.Skills/>
                    <UserCV.Badge/>
                </UserCV>
            </div>
        )
    }
}

export default UserProfile;
