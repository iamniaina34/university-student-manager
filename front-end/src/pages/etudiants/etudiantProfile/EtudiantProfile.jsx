import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { EtudiantAPI } from '../../../api/entities';
import { Typography } from '@mui/material';

function EtudiantProfile() {

    const [etudiant, setEtudiant] = useState({});
    const { numeroMatricule } = useParams();

    useEffect(() => {
        EtudiantAPI
            .get(numeroMatricule)
            .then(response => {
                setEtudiant(response.data)
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    return (
        <React.Fragment>
            <div className='p-4 px-0 flex justify-between items-center'>
                <Typography variant='h5' fontWeight={600} sx={{ color: '#111111' }}>
                    {etudiant.nom + ' ' + etudiant.prenom}
                </Typography>
            </div>
        </React.Fragment>
    )
}

export default EtudiantProfile