import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Etudiants from './pages/etudiants/Etudiants';
import Classes from './pages/classes/Classes';
import Cours from './pages/cours/Cours';
import Seances from './pages/seances/Seances';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#1a9948',
            },
            secondary: {
                main: '#555',
            },
        },
    }
);

function App() {

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/etudiants' element={<Etudiants />} />
                    <Route path='/classes' element={<Classes />} />
                    <Route path='/cours' element={<Cours />} />
                    <Route path='/seances' element={<Seances />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App
