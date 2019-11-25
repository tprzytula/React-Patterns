import React, { Fragment } from 'react';
import '../styles/styles.css';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const UserContext = React.createContext({});

function useUserContext() {
    const context = React.useContext(UserContext);
    if (!context) {
        throw new Error(
            `Toggle compound components cannot be rendered outside the Toggle component`,
        )
    }
    return context
}

function Profile() {
    const { bio } = useUserContext();

    return (
        <div className='element details-container'>
            <Typography component="h1">
                Profile
            </Typography>
            <Typography color="textSecondary" className='bio-text'>
                {bio}
            </Typography>
        </div>
    );
}

function Social() {
    const { social } = useUserContext();

    return (
        <div className='social-container'>
            {social.map((item, index) =>
                <Avatar
                    key={index}
                    src={item.avatar}
                    className='social-item'
                    onClick={() => {
                        const win = window.open(item.url, '_blank');
                        win.focus();
                    }}
                />
            )}
        </div>
    );
}

function Badge() {
    const { avatar, name } = useUserContext();

    return (
        <div className='element profile-badge-container'>
            <Chip
                className='profile-badge'
                color="primary"
                avatar={<Avatar src={avatar.url} />}
                variant="outlined"
                label={name}
            />
        </div>
    )
}

function Skills({ children }) {
    const { skills } = useUserContext();

    const renderItem = (item, index) => (
        <Typography
            key={index}
            color="textSecondary"
        >
            {item}
        </Typography>
    );

    const renderCategory = key => {
        const category = skills[key];
        return (
            <Fragment key={key}>
                <div className='spacer' />
                <Typography component="h2" style={{ textTransform: 'capitalize'}}>
                    {key}
                </Typography>
                {category.map((item, index) => renderItem(item, index))}
            </Fragment>
        );
    };

    return (
        <div className='element details-container'>
            <Typography component="h1">
                Skills
            </Typography>
            {Object.keys(skills).map(key => renderCategory(key))}
            {children}
        </div>
    );
}

function UserCV({ user, children }) {
    return (
        <UserContext.Provider value={user}>
            <Card>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </UserContext.Provider>
    );
}

UserCV.Profile = Profile;
UserCV.Social = Social;
UserCV.Badge = Badge;
UserCV.Skills = Skills;

export default UserCV;
