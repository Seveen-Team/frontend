import { CHART_SUCCESS, CHART_FAILURE, CHART_LOADING } from '../types/chartTypes';

const INITIAL_STATE = {
	loading: false,
  data: [],
  error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CHART_LOADING:
			return {
        loading: true
			};
		case CHART_SUCCESS:
			return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      };
		case CHART_FAILURE:
			return {
        ...state,
        loading: false,
        data: [],
        error: action.payload
      };
		default:
			return state;
	}
};