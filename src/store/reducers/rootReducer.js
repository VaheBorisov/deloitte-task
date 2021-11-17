import {combineReducers} from 'redux';

/* Reducers */
import DeloitteReducer from './deloitte.reducer';


const appReducer = combineReducers({
    deloitte: DeloitteReducer
});

// reset the state of a redux store
const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;