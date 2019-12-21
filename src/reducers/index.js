import { combineReducers } from 'redux';

import breedsReducer from './breedsReducer';

export default combineReducers({
	breeds: breedsReducer
});
