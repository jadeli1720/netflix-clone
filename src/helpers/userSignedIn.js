import React from 'react';
import { Navigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes'

export default function UserSignedIn({ user, children }) {

  if (user) {
    return <Navigate  to={ROUTES.BROWSE} replace />
  }

  return children
}

