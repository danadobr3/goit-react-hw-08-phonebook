import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

import Loader from './Loader/Loader';
import Layout from './Layout/Layout';
import { currentUsersThunk } from 'slice/auth/thunk';


const Home = lazy(() => import('pages/Home'));
const RegisterForm = lazy(() => import('pages/RegisterPage'));
const LoginForm = lazy(() => import('pages/LoginPage'));
const Contacts = lazy(() => import('pages/Contacts'));

const App = () => {
  const { isLoading } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUsersThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/login" />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute component={<RegisterForm />} redirectTo="/contacts" />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute component={<LoginForm />} redirectTo="/contacts" />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};


export default App;