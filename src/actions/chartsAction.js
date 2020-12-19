import axios from 'axios';
import { CHART_SUCCESS, CHART_FAILURE, CHART_LOADING } from '../types/chartTypes';

const fetchChartRequest = () => {
  return {
    type: CHART_LOADING,
  };
};

const fetchChartSuccess = (payload) => {
  return {
    type: CHART_SUCCESS,
    payload,
  };
};

const fetchChartFailure = (payload) => {
  return {
    type: CHART_FAILURE,
    payload,
  };
};

export const getChar = () => {
  return (dispatch) => {
    dispatch(fetchChartRequest());
    axios.get(`https://seventeam.herokuapp.com/api/v1/user/${localStorage.getItem('user')}`)
      .then(({ data: { body }}) => {
        dispatch(fetchChartSuccess(body));
      })
      .catch(({ message }) => dispatch(fetchChartFailure(message)));
  }
}