import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const RequireAuth = (props) => {
  const history = useHistory();
  const auth = useSelector((state) => state.auth.auth);

  useEffect(() => {
    if(!auth){
        history.push('/login')
    }
   
  }, [auth])
  
  return props.children;
};

export default RequireAuth;