import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Home from './pages/Home';
import Etudiants from './pages/etudiants/index/Etudiants';
import Classes from './pages/classes/Classes';
import Cours from './pages/cours/Cours';
import Seances from './pages/seances/Seances';
import EtudiantProfile from './pages/etudiants/etudiantProfile/EtudiantProfile';
import AddEtudiant from './pages/etudiants/addEtudiant/AddEtudiant';
import HeaderNav from './components/navBar/HeaderNav';
import NavList from './components/NavList';
import CustomAppBar from './components/CustomAppBar';

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
    const [open, setOpen] = useState(false);
    const handleMenuOpen = () => {setOpen(true)};
    const handleMenuClose = () => {setOpen(false)};

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div className='flex flex-col h-screen overflow-hidden'>
                    <div id="header" className='border border-none'>
                        <CustomAppBar 
                        open={open}
                        onMenuClick={handleMenuOpen}
                        onClose={handleMenuClose}
                        />
                    </div>
                    <div className='flex flex-row h-full'>
                        <div id="nav" className='py-4 lg: w-3/12 max-w-80 hidden lg:flex border-r'>
                            <NavList />
                        </div>
                        <div id='content' className='mx-4 flex flex-col flex-1 h-full w-full items-center overflow-hidden'>
                            <div className='my-4 w-full xl:w-11/12 max-w-screen-xl flex flex-col max-h-full gap-4 overflow-auto'>
                                <div className='z-10 h-10 bg-white flex flex-col justify-center items-center sticky top-0'>
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
