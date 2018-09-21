import React, { Component } from 'react';
import UserCV from './api';
import profileData from './data/profileData';

class UserProfile extends Component {
    render() {
        return (
            <div style={{ width: '350px', margin: '0 auto'}}>
                <UserCV user={profileData}>
                    <div>
                        <UserCV.Badge/>
                    </div>
                    <hr/>
                    <UserCV.Profile/>
                    <UserCV.Skills>
                        <hr/>
                    </UserCV.Skills>
                    <UserCV.Social/>
                </UserCV>
            </div>
        )
    }
}

export default UserProfile;