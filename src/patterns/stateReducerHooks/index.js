import React from 'react';
import useRepeater from './api';
import './styles/styles.css';
import Icon from '@material-ui/core/Icon';

function Rating() {
    const stateReducer = (state, { changes }) => {
        if (changes.times > 6) {
            return { ...changes, times: 6 };
        } else if (changes.times <= 1) {
            return { ...changes, times: 1 };
        }

        return changes;
    };

    const { increase, decrease, RepeatedComponents } = useRepeater({
        element: <span className="hook" role="img" aria-label="hook">🎣</span>,
        initialAmount: 1,
        stateReducer
    });

    return (
        <div className="container">
            <h1>How catchy was our service?</h1>
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
            <br/>
            { RepeatedComponents }
        </div>
    );
}

export default Rating;
