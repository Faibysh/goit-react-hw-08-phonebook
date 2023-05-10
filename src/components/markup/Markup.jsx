import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { UserMenu } from 'components/UserInfo';
import { AuthNav } from 'components/AuthNav';
import authSelectors from 'store/auth/auth-selectors';
import Loader from 'loader';

function SharedLayout() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedin);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundImage:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,48,79,1) 35%, rgba(10,177,217,1) 86%, rgba(0,212,255,1) 100%)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem
                  component={NavLink}
                  to="./"
                  key="Home"
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem
                  component={NavLink}
                  to="./contacts"
                  key="Contacts"
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">Contacts</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                '& > button': { mx: 2 },
              }}
            >
              <Button
                component={NavLink}
                to="./"
                key="Home"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              <Button
                component={NavLink}
                to="./contacts"
                key="Contacts"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contacts
              </Button>
            </Box>

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </Container>
      </AppBar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
export default SharedLayout;
