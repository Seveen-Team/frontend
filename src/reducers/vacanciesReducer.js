import {
  VACANCIES_REQUEST,
  VACANCIES_SUCCESS,
  VACANCIES_FAILURE
} from '../types/vacanciesTypes';

const INITIAL_STATE = {
	loading: false,
  vacancies: [],
  error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case VACANCIES_REQUEST:
			return {
        loading: true
			};
		case VACANCIES_SUCCESS:
			return {
        ...state,
        loading: false,
        vacancies: action.payload,
        error: ''
      };
		case VACANCIES_FAILURE:
			return {
        ...state,
        loading: false,
        vacancies: [],
        error: action.payload
			};
		default:
			return state;
	}
};