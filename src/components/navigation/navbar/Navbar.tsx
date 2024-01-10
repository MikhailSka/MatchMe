import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  List,
  FormControlLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';

import { useThemeContext } from 'components/themes/context/useThemeContext';
import { ThemeSwitch } from 'components/buttons/switch/ThemeSwitch';
import { ProfileButton } from 'components/buttons/icon/ProfileButton';
import { LogoButton } from 'components/buttons/icon/LogoButton';
import { navbarPages } from '../pages/navbarPages';
import { profilePages } from '../pages/profilePages';
import { NavToolbar } from './NavToolbar';
import { MenuOpenButton } from 'components/buttons/icon/MenuOpenButton';
import { useMenu } from 'components/menu/context/useMenu';
import { MenuItem } from 'components/menu/MenuItem';


const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { toggleTheme, themeMode } = useThemeContext();

  const {
    anchorEl,
    openMenu: contextOpenMenu,
    closeMenu: contextCloseMenu,
  } = useMenu();
  useEffect(() => {
    const handleResize = () => {
      contextCloseMenu();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [contextCloseMenu]);
  const navigate = useNavigate();
  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    contextOpenMenu(event);
  };
  return (
    <AppBar
      sx={{
        position: 'relative',
        marginBottom: '30px',
        backgroundColor: 'secondary.main',
      }}
    >
      <Container maxWidth="xl">
        <NavToolbar disableGutters>
          <Box>
            <LogoButton />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navbarPages.map((page) => (
              <MenuItem
                onClick={() => navigate(page.link)}
                text={page.name}
                icon={page.icon}
              />
            ))}
            <ProfileButton onClick={handleProfileClick} />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={contextCloseMenu}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <Box sx={{ padding: '5px' }}>
                {profilePages.map((page) => (
                  <MenuItem
                    onClick={() => navigate(page.link)}
                    text={page.name}
                    icon={page.icon}
                  />
                ))}
                <Box sx={{ margin: '3px' }}>
                  <FormControlLabel
                    control={
                      <ThemeSwitch
                        defaultChecked={true}
                        checked={themeMode === 'dark'}
                        onChange={toggleTheme}
                      />
                    }
                    label={themeMode === 'light' ? 'Light' : 'Dark'}
                  />
                </Box>
                <Divider />
                <MenuItem
                  text="Logout"
                  icon={<LogoutIcon />}
                  onClick={() => navigate('login')}
                />
              </Box>
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <MenuOpenButton onClick={() => setOpenMenu(!openMenu)} />
            <Drawer
              PaperProps={{
                sx: {
                  backgroundColor: 'secondary.main',
                },
              }}
              anchor="right"
              open={openMenu}
              onClose={() => setOpenMenu(!openMenu)}
            >
              <Box>
                <LogoButton />
                <ProfileButton onClick={handleProfileClick} />
              </Box>
              <List>
                {navbarPages.map((page) => (
                  <MenuItem
                    onClick={() => navigate(page.link)}
                    text={page.name}
                    icon={page.icon}
                  />
                ))}
              </List>
            </Drawer>
          </Box>
        </NavToolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
