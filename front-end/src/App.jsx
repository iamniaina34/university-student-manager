import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Home from './pages/Home';
import Etudiants from './pages/etudiants/index/Etudiants';
import Classes from './pages/classes/Classes';
import Cours from './pages/cours/Cours';
import Seances from './pages/seances/Seances';
import SideNavBar from './components/navBar/SideNavBar';
import EtudiantProfile from './pages/etudiants/etudiantProfile/EtudiantProfile';
import Breadcrumb from './components/breadcrumbs/Breadcrumb';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1a9948',
        },
        secondary: {
            main: '#555',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div className='flex overflow-hidden gap-4'>
                    <div>
                        <SideNavBar />
                    </div>
                    <div className='flex flex-col flex-1 w-full h-full overflow-auto gap-2'>
                        <div className='py-4 pb-2 flex justify-between items-center'>
                            <Breadcrumb />
                        </div>
                        <div className=''>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/etudiants' element={<Etudiants />} />
                                <Route path='/etudiants/:numeroMatricule' element={<EtudiantProfile />} />
                                <Route path='/classes' element={<Classes />} />
                                <Route path='/cours' element={<Cours />} />
                                <Route path='/seances' element={<Seances />} />
                            </Routes>
                        </div>
                    </div>
                    <br />
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
