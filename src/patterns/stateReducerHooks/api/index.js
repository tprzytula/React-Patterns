import React, {Fragment, useReducer} from 'react';

const ActionTypes = {
	increase: 'increase',
	decrease: 'decrease'
};

function repeaterReducer(state, action) {
	switch (action.type) {
		case ActionTypes.increase: {
			return { times: state.times + 1 }
		}
		case ActionTypes.decrease: {
			return { times: state.times - 1 }
		}
		default: {
			throw new Error(`Unhandled type: ${action.type}`)
		}
	}
}

function useRepeater({ element, initialAmount, stateReducer }) {
	const [state, dispatch] = useReducer(
		(state, action) => {
			const changes = repeaterReducer(state, action);

			return stateReducer(state, { ...action, changes })
		},
		{ times: initialAmount },
	);

	const increase = () => dispatch({ type: ActionTypes.increase });
	const decrease = () => dispatch({ type: ActionTypes.decrease });
	const RepeatedComponents = [...Array(state.times)]
		.map((item, index) =>
			<Fragment key={`repeated-component-${ index }`}>
				{ element }
			</Fragment>
		);

	return { RepeatedComponents, increase, decrease };
}

export default useRepeater;
