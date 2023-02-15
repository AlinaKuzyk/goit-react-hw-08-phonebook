import Box from '@mui/material/Box';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

const AppBar = () => {
  return (
    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </Box>
  );
};

export default AppBar;
