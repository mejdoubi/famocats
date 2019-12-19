import { combineReducers } from 'redux';

import catsReducer from './catsReducer';

export default combineReducers({
	cats: catsReducer
});
