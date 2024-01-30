import React from 'react';
import { NavLink } from 'react-router-dom';


function AuthNav() {
  return (
    <>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
}

export default AuthNav;