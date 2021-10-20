import {createStore} from 'redux'; 
import CompinedReducers from './reducers/CompinedReducers';

const composeEnhancers = 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(CompinedReducers, composeEnhancers);

export default store;