import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Typography, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Home from './pages/Home';
import Etudiants from './pages/etudiants/index/Etudiants';
import Classes from './pages/classes/Classes';
import Cours from './pages/cours/Cours';
import Seances from './pages/seances/Seances';
import SideNavBar from './components/navBar/SideNavBar';
import EtudiantProfile from './pages/etudiants/etudiantProfile/EtudiantProfile';
import AddEtudiant from './pages/etudiants/addEtudiant/AddEtudiant';
import HeaderNav from './components/navBar/HeaderNav';

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
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div className='flex overflow-hidden gap-4 2xl:gap-8'>
                    <div className=''>
                        <SideNavBar />
                    </div>
                    <div className='py-2 mx-2 flex flex-col flex-1 h-full overflow-hidden gap-4'>
                        <div className='flex justify-between items-center'>
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

                    <div>
                    </div>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
