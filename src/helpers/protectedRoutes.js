import React from "react";
import { Navigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes'
import useAuthListener from '../hooks';

//passing in a user and loggedInPath 
export default function ProtectedRoute ({ children }) {
  const  { user } = useAuthListener();

  if(!user) {
    return <Navigate to={ROUTES.SIGN_IN} replace/>
  } 
  return children
}

//protecting browse page if user is not logged in
