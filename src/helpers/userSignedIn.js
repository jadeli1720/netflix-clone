import React from 'react';
import { Navigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes'
import useAuthListener from '../hooks';

export default function UserSignedIn({ children }) {
  const { user } = useAuthListener();
  if (user) {
    return <Navigate  to={ROUTES.BROWSE} replace />
  }

  return children
}

