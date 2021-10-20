import { combineReducers } from 'redux';
import languageReducer from './ChangeLanguageReducer';
import incrementReducer from './IncrementReducer';


export default combineReducers({
  languageReducer,
  incrementReducer
});