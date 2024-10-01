import React from 'react';
import Userfront from '@userfront/toolkit';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  console.log(Userfront.tokens.accessToken);
  if (!Userfront.tokens.accessToken) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default RequireAuth;
