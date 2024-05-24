import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { EtudiantAPI } from '../../../api/entities';
import EtudiantList from './EtudiantList';

function Etudiants() {

    const [etudiants, setEtudiants] = useState([]);

    useEffect(() => {
        EtudiantAPI.index()
            .then(response => {
                setEtudiants(response.data);
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

    return (
        <React.Fragment>
            <div className='p-4 px-0 flex justify-between items-center'>
                <Typography variant='h5' fontWeight={600} sx={{ color: '#111111' }}>
                    Liste des etudiants
                </Typography>
            </div>
            <EtudiantList rows={etudiants} />
        </React.Fragment>
    );
}

export default Etudiants;
