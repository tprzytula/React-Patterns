import React, { Component } from 'react';
import Repeater from './api';
import './styles/styles.css';
import Icon from '@material-ui/core/Icon';

class Rating extends Component {
    getElement = () => <Icon className="star">star</Icon>;

    stateReducer = (state, changes) => {
        if (changes.times > 6) {
            return { ...changes, times: 6 };
        } else if (changes.times <= 1) {
            return { ...changes, times: 1};
        }

        return changes;
    };

    render() {
        return (
            <Repeater
                element={this.getElement()}
                stateReducer={this.stateReducer}
                initialAmount={1}
            >
                {({ increase, decrease }) =>
                    <React.Fragment>
                        <h1>How good was our service ?</h1>
                        <Icon
                            className="control minus"
                            onClick={decrease}
                            fontSize="large"
                        >
                            remove_circle
                        </Icon>
                        <Icon
                            className="control plus"
                            onClick={increase}
                            fontSize="large"
                        >
                            add_circle
                        </Icon>
                    </React.Fragment>
                }
            </Repeater>
        );
    }
}

export default Rating;