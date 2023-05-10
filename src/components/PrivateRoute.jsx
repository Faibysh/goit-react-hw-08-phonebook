import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'store/auth/auth-selectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedin);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}
