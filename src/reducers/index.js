import { combineReducers } from 'redux';
import userReducer from './userReducer';
import vacanciesReducer from './vacanciesReducer';
import chartReducer from './chartReducer';

export default combineReducers({
	userReducer,
	vacanciesReducer,
	chartReducer
});
