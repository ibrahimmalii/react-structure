import {createStore} from 'redux'; 
import reducer from './reducer';

const composeEnhancers = 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, composeEnhancers);

export default store;