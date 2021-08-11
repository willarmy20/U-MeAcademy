//import {AUTH_USER} from '../actions/index';

const initialState = {
   auth: ""
}

const reducerTemplate = (state = initialState, action) => {

    switch(action.type){
        case "AUTH_USER":
            return {
                ...state,
                auth: action.data
            }
        
        default:
            return state;
    } 
}




export default reducerTemplate