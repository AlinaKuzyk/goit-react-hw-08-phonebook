import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Box
        component="div"
        sx={{
          display: 'flex',
          padding: '20px',
          justifyContent: 'space-between',
          borderBottom: '2px solid grey',
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>

      <Outlet />
    </>
  );
};

export default AppBar;
