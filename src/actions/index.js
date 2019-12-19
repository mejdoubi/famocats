import cats from '../apis/cats';
import { FETCH_BREEDS } from './types';

export const fetchBreeds = () => async dispatch => {
	const response = await cats.get('/breeds');

	dispatch({
		type: FETCH_BREEDS,
		payload: response.data
	});
};
