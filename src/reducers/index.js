import { combineReducers } from 'redux';
import userReducer from './userReducer';
import vacanciesReducer from './vacanciesReducer';

export default combineReducers({
	userReducer,
	vacanciesReducer
});
