import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  getisLoggedInStatus,
  getisRefreshingStatus,
} from 'redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getisLoggedInStatus);
  const isRefreshing = useSelector(getisRefreshingStatus);
  useSelector(state => console.log(state.auth));

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  console.log(shouldRedirect);
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
