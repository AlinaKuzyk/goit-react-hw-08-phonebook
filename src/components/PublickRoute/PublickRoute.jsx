import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';

export const PublickRoute = ({
  children,
  restricted = false,
  redirectTo = '/',
}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <>{shouldRedirect ? <Navigate to={redirectTo} replace /> : children}</>
  );
};
