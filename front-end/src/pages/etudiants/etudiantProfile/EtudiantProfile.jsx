import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { EtudiantAPI } from '../../../api/entities';

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
        <>
            <div>EtudiantProfile: {etudiant.numeroMatricule}</div>
        </>
    )
}

export default EtudiantProfile