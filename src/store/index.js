import { createStore, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

// 'composer' helps us to implement different kind of
// middleware.


const store = createStore(rootReducer, compose(    
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
//without using the above line (inside the composer) the store
//may not work properly. I don't know why. But may be this a browser issue.

export default store;
