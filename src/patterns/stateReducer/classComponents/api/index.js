import React, { Component, Fragment } from 'react';
import '../styles/styles.css';

class Repeater extends Component {
    initialState = {
        times: this.props.initialAmount || 0
    };

    state = this.initialState;

    internalSetState = (changes, callback) => {
        this.setState(state => {
            const changesObject = typeof changes === 'function' ? changes(state) : changes;
            const reducedChanges = this.props.stateReducer(state, changesObject) || {};
            return Object.keys(reducedChanges).length
                ? reducedChanges
                : null
        }, callback);
    };

    increase = () => {
        this.internalSetState({ times: this.state.times + 1 });
    };

    decrease = () => {
        const { times } = this.state;
        if (times > 0) {
            this.internalSetState({ times: times - 1 });
        }
    };

    getStateAndHelpers = () => ({
        increase: this.increase,
        decrease: this.decrease
    });

    render() {
        const elements = [...Array(this.state.times)]
            .map((item, index) =>
                <Fragment key={index}>
                    {this.props.element}
                </Fragment>
            );

        return (
            <div className="container">
                {this.props.children(this.getStateAndHelpers())}
                <br/>
                {elements}
            </div>
        );
    }
}

export default Repeater;