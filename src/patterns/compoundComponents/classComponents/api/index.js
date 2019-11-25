import React, {Component, Fragment} from 'react';
import '../styles/styles.css';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const UserContext = React.createContext({});

class UserCV extends Component {
    static Profile = () => (
        <UserContext.Consumer>
            {({ bio }) =>
                <div className='element details-container'>
                    <Typography component="h1">
                        Profile
                    </Typography>
                    <Typography color="textSecondary" className='bio-text'>
                        {bio}
                    </Typography>
                </div>
            }
        </UserContext.Consumer>
    );

    static Social = () => (
        <UserContext.Consumer>
            {({ social }) =>
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
            }
        </UserContext.Consumer>
    );

    static Badge = () => (
        <UserContext.Consumer>
            {user =>
                <div className='element profile-badge-container'>
                    <Chip
                        className='profile-badge'
                        color="primary"
                        avatar={<Avatar src={user.avatar.url} />}
                        variant="outlined"
                        label={user.name}
                    />
                </div>
            }
        </UserContext.Consumer>
    );

    static Skills = props => {
        const renderItem = (item, index) => (
            <Typography
                key={index}
                color="textSecondary"
            >
                {item}
            </Typography>
        );

        const renderCategory = (skills, key) => {
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
            <UserContext.Consumer>
                {({ skills }) =>
                    <div className='element details-container'>
                        <Typography component="h1">
                            Skills
                        </Typography>
                        {Object.keys(skills).map(key => renderCategory(skills, key))}
                        {props.children}
                    </div>
                }
            </UserContext.Consumer>
        );
    };

    render() {
        return (
            <UserContext.Provider value={this.props.user}>
                <Card>
                    <CardContent>
                        {this.props.children}
                    </CardContent>
                </Card>
            </UserContext.Provider>
        );
    }
}

export default UserCV;
