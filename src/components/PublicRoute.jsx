import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'store/auth/auth-selectors';

export default function PublicRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedin);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
