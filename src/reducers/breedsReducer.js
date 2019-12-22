import { FETCH_BREEDS } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_BREEDS:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
