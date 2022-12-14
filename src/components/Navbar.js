import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import cw from '../assets/cw.jpeg';
import { orange } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
import { useContext} from "react";
import { logOut } from '../helpers/firebase';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'About', 'Login', 'Register', 'New Blog'];

const Navbar = () => {

  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext)

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

          <img src={cw} alt="logo" className='navbarLogo' style={{cursor:'pointer'}} onClick={() => navigate('/')}/>
          <Typography marginLeft={3}> Blog Sayfama Hoşgeldiniz..</Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              
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

            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src=<MenuIcon/> /> */}
                <MenuIcon fontSize="large" sx={{ color: orange[600] }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser ? 
              <div>

                <MenuItem>
                  <Typography onClick={() => navigate('/about')}  textAlign="center">About</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography onClick={() => navigate('/newblog')} textAlign="center">New Blog</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography onClick={() => navigate('/profile')} textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography onClick={() => logOut()}  textAlign="center">Logout</Typography>
                </MenuItem>
              </div>

                : 
                <div>
                <MenuItem>
                  <Typography onClick={() => navigate('/login')}  textAlign="center">Login</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography onClick={() => navigate('/register')}  textAlign="center">Register</Typography>
                </MenuItem>
                </div>
            }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
