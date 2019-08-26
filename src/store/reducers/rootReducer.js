import {combineReducers} from 'redux';
import countReducer from './countReducer';
import countReducerForProductComponent from './countReducerForProductComponent'

const rootReducer = combineReducers({
    countReducer: countReducer,
    priceReducer: countReducerForProductComponent,
})
//Here we use the name 'counter' for the 'countReducer' so that
//we can catch the 'countReducer' as the name of 'counter' in future
export default rootReducer;