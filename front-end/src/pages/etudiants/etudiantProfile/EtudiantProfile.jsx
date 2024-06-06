import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { EtudiantAPI } from '../../../api/entities';
import { Typography } from '@mui/material';
import Heading from '../../../components/Heading';

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
            <Heading label={`${etudiant.nom} ${etudiant.prenom}`} />
        </React.Fragment>
    )
}

export default EtudiantProfile