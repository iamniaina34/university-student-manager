import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'; 
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';

const drawerWidth = 240;

const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#1a9948',
            },
            secondary: {
                main: 'rgb(25, 25, 25)',
            },
        },
    }
);

const navItems = [
    {
        label: 'Etudiants',
        path: '/etudiants',
        icon: <PeopleRoundedIcon />,
    },
    {
        label: 'Classes',
        path: '/classes',
        icon: <SchoolRoundedIcon />,
    },
    {
        label: 'Séances',
        path: '/seances',
        icon: <EventRoundedIcon />,
    },
    {
        label: 'Cours',
        path: '/cours',
        icon: <MenuBookRoundedIcon />,
    }
];

function Title({ sx }) {
    return (
        <Typography variant="h6" fontSize={16} fontWeight={800} component="a" href='/' sx={sx}>
            USM
        </Typography>
    );
}

function NavButton({ item, sx }) {
    const location = useLocation();

    return (
        <ThemeProvider theme={theme}>
            <Button startIcon={item.icon} color = {(location.pathname === item.path ) ? 'primary' : 'secondary'} size='small' className='hover:transition-all hover:text-green-800' sx={sx}>
                {item.label}
            </Button>
        </ThemeProvider>
    );
}

function NavBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Title sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px 64px', height: '4.04rem' }} />
            <Divider />
            <List>
                {navItems.map((item) => (
                    <Link to={item.path} key={item.label} className="hover:bg-white">
                        <ListItemButton sx={{ padding: '4px 8px', textAlign: 'left', fontSize: '16px', fontWeight: '500', '&:hover': { background: 'transparent' } }}>
                            <NavButton item={item} sx={{ width: '100%', justifyContent: 'flex-start', padding: '4px 8px' }} />
                        </ListItemButton>
                    </Link>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'block', margin: '0px 0px 9px', height: '3.5rem' }}>
            <CssBaseline />
            <AppBar component="nav" color='inherit' variant="outlined" elevation={0} sx={{ padding: { sm: '0 0px', md: '0 32px' } }}>
                <Toolbar sx={{ justifyContent: {xs: 'flex-end', sm: 'space-between'} }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, margin: '0.75rem' }}>
                        <MenuIcon />
                    </IconButton>
                    <Title sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, maxWidth: '36px' }} />
                    <Box sx={{
                        display: { xs: 'none', sm: 'flex' },
                        justifyContent: 'space-between',
                        gap: '10px'
                    }}>
                        {navItems.map((item) => (
                            <Link to={item.path} key={item.label}>
                                <NavButton item={item} sx={{ padding: '4px 8px' }} />
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    anchor='right'
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default NavBar;
