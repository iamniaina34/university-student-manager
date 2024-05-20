import React, { useEffect, useState } from 'react';
import NavBar from '../../../components/NavBar';
import { Container, Typography } from '@mui/material';
import { EtudiantAPI } from '../../../api/entities';
import EtudiantList from './EtudiantList';

function Etudiants() {

    const [etudiants, setEtudiants] = useState([]);

    useEffect(() => {
        EtudiantAPI.index()
            .then(response => {
                setEtudiants(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <div className='body-container'>
                <div className="scroll-container">
                    <div>
                        <NavBar />
                    </div>
                    <div>
                        <Container sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px'
                        }}>
                            <Typography variant='h5' fontWeight={600}>
                                Liste des étudiants
                            </Typography>
                            <EtudiantList rows = {etudiants} />
                        </Container>
                    </div>
                    <br />
                </div>
            </div>
        </>
    );
}

export default Etudiants;
