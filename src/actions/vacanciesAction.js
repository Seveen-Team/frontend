import axios from 'axios';
import {
  VACANCIES_REQUEST,
  VACANCIES_SUCCESS,
  VACANCIES_FAILURE
} from '../types/vacanciesTypes';

const fetchVacanciesRequest = () => {
  return {
    type: VACANCIES_REQUEST,
  };
};

const fetchVacanciesSuccess = (payload) => {
  return {
    type: VACANCIES_SUCCESS,
    payload,
  };
};

const fetchVacanciesFailure = (payload) => {
  return {
    type: VACANCIES_FAILURE,
    payload,
  };
};

export const fetchVacancies = () => {
  return(dispatch) => {
    dispatch(fetchVacanciesRequest());
    axios.get('https://seventeam.herokuapp.com/api/v1/vacant')
      .then(({ data: { body }}) => {
        dispatch(fetchVacanciesSuccess(body));
      })
      .catch(({ message }) => dispatch(fetchVacanciesFailure(message)));
  }
}

export const sendInterest = (id) => {
  return(dispatch) => {
    axios({
      url: `https://seventeam.herokuapp.com/api/v1/user/${localStorage.getItem('user')}`,
      method: 'patch',
      data: {
        myVacants: {
          interested: id
        }
      }
    })
      .then(data => null)
      .catch(error=>dispatch(fetchVacanciesFailure(error.message)));
  }
}