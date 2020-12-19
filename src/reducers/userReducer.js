import {
	LOADING,
	ERROR,
	GET_USER_STATE,
} from '../types/userTypes';

const INITIAL_STATE = {
	preferences: [],
  process: [],
  finalized: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_USER_STATE:
			return {
				...state,
				preferences: action.payload.preferences,
				process: action.payload.process,
				finalized: action.payload.finalized,
				loading: false,
				error: '',
			};

		case LOADING:
			return { ...state, loading: true };

		case ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};