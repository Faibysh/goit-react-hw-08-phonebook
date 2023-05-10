import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';
import SharedLayout from './markup/Markup';
import operations from 'store/auth/auth-operations';
import Login from './pages/Login';
const Home = lazy(() => import('./pages/Home'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Register = lazy(() => import('./pages/Register'));
const NotFound = lazy(() => import('./pages/404'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/contacts" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
