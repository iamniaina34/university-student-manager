import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppBar, Divider, IconButton, Paper, Toolbar, Typography, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './pages/Home';
import Etudiants from './pages/etudiants/index/Etudiants';
import Classes from './pages/classes/Classes';
import Cours from './pages/cours/Cours';
import Seances from './pages/seances/Seances';
import SideNavBar from './components/navBar/SideNavBar';
import EtudiantProfile from './pages/etudiants/etudiantProfile/EtudiantProfile';
import AddEtudiant from './pages/etudiants/addEtudiant/AddEtudiant';
import HeaderNav from './components/navBar/HeaderNav';
import NavList from './components/NavList';

const drawerWidth = 240;

const theme = createTheme({
    palette: {
        primary: {
            main: '#1a9948',
        },
        secondary: {
            main: '#444444',
        },
    },
});

function App() {

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                {/* <div className='flex overflow-hidden'>
                    <div className=''>
                        <SideNavBar />
                    </div>
                    <div className='py-2 mx-2 flex flex-col flex-1 h-screen w-full items-center overflow-hidden'>
                        <div className='mb-4 w-full lg:w-10/12 flex flex-col max-h-full gap-4 overflow-auto pr-4'>
                            <div className='z-10 bg-white flex justify-between items-center sticky top-0'>
                                <HeaderNav />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <Routes>
                                    <Route path='/' element={<Home />} />
                                    <Route path='/etudiants' element={<Etudiants />} />
                                    <Route path='/etudiants/:numeroMatricule' element={<EtudiantProfile />} />
                                    <Route path='/etudiants/ajouter' element={<AddEtudiant />} />
                                    <Route path='/classes' element={<Classes />} />
                                    <Route path='/cours' element={<Cours />} />
                                    <Route path='/seances' element={<Seances />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='flex flex-col h-screen'>
                    <div id="header">
                        <AppBar
                            color='transparent'
                            position="sticky"
                            elevation={0}
                        >
                            <Toolbar>
                                <div className='block lg:hidden'>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        onClick={handleDrawerToggle}
                                        sx={{
                                            mr: 2,
                                        }}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </div>
                                <Typography variant="h6" noWrap component="div">
                                    USManager
                                </Typography>
                            </Toolbar>
                            <Divider />
                        </AppBar>
                    </div>
                    <div className='m-4 flex flex-row gap-4 h-full'>
                        <div id="nav" className='w-fit hidden lg:flex'>
                            <NavList />
                        </div>
                        <div id='content' className='flex flex-col flex-1 h-full w-full items-center overflow-hidden'>
                            <div className='mb-4 w-full xl:w-11/12 flex flex-col max-h-full gap-4 overflow-auto pr-4'>
                                <div className='z-10 bg-white flex justify-between items-center sticky top-0'>
                                    <HeaderNav />
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <Routes>
                                        <Route path='/' element={<Home />} />
                                        <Route path='/etudiants' element={<Etudiants />} />
                                        <Route path='/etudiants/:numeroMatricule' element={<EtudiantProfile />} />
                                        <Route path='/etudiants/ajouter' element={<AddEtudiant />} />
                                        <Route path='/classes' element={<Classes />} />
                                        <Route path='/cours' element={<Cours />} />
                                        <Route path='/seances' element={<Seances />} />
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
