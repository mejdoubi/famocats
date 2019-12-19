import { FETCH_BREEDS } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_BREEDS:
			//return { ...state, ..._.mapKeys(action.payload, 'id') };
			return { ...state };
		default:
			return state;
	}
};
