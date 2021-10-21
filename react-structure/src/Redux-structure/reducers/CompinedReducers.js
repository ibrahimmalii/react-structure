import { combineReducers } from 'redux';
import { changeLanguageReducer } from './ChangeLanguageReducer'
import { counterReducer } from './CounterReducer'


export default combineReducers({
    changeLanguageReducer,
    counterReducer

})