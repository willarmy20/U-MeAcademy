//import {AUTH_USER} from './actionTypes';
import axios from 'axios';

/**
 * Registration action
 */
export const register = (formData, cb) => async dispatch => {
    
    try{
        console.log(formData);
        //take formdata: email, password
        //call our server api: /register
        let response = await axios.post('/auth/register', formData);

        console.log(response.data.token);
        
        //wait for an authentication token
        
        //call reducer to store token
        dispatch({
            type: "AUTH_USER", 
            data: response.data.token
        })

        //invoking function to redirect user to feature page
        cb();
        
    }
    catch(err){
        console.log("error message", err);
    }

}


/**
 * Login
 */

export const login = (formData, cb) => async dispatch => {
    

    try{
            //make api call : /login

            let response = await axios.post('auth/login', formData);

            dispatch({
                type: "AUTH_USER",
                data: response.data.token
            })

            //invoking function to redirect user to feature page
            cb()
    }
    catch(err){

    }
}

/**
 * Logout
 */

export const signOut = (cb) => dispatch => {
    
    dispatch({
        type: "AUTH_USER", 
        data: ""
    })

    cb();

}
