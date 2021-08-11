import {combineReducers} from 'redux';
import courseReducer from './courseReducer';
import authReducer from './reducer'

const rootReducer = combineReducers({
    course: courseReducer,
    auth: authReducer
})

export default rootReducer;
