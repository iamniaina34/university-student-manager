import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { EtudiantAPI } from '../../../api/entities';
import Heading from '../../../components/Heading';
import EtudiantAvatar from '../index/EtudiantAvatar';
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
            {/* <Heading label={`${etudiant.nom} ${etudiant.prenom}`} /> */}
            <div className='flex flex-col gap-8'>
                <div className='w-full p-2 flex flex-row gap-8'>
                    <div className='border-4 border-green-300 border-opacity-50 rounded-full'>
                        <EtudiantAvatar etudiant={etudiant} size={'5rem'} fontSize={'40px'} />
                    </div>
                    <div className='w-full py-1 flex flex-col'>
                        <Typography
                            variant='h5'
                            fontWeight={500}
                            gutterBottom
                            sx={{
                                color: '#111111',
                            }}
                        >
                            {etudiant.nom || ''} {etudiant.prenom || ''}
                        </Typography>
                        <div className='w-full'>
                            <Typography
                                variant='subtitle2'
                                fontWeight={500}
                                sx={{
                                    color: '#888888',
                                }}
                            >
                                {etudiant.numeroMatricule}
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                fontWeight={500}
                                sx={{
                                    color: '#888888',
                                }}
                            >
                                {etudiant.niveau ? etudiant.niveau.niveauAcro : ''} {etudiant.parcours ? etudiant.parcours.parcoursAcro : ''}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div id="infoG" className='flex flex-col gap-4'>
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                    >
                        Informations Générales
                    </Typography>
                    <div>

                    </div>
                </div>
                <div id="infoSco" className='flex flex-col gap-4'>
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                    >
                        Informations Scolaires
                    </Typography>
                    <div>
                        
                    </div>
                </div>
                <div id="infoSup" className='flex flex-col gap-4'>
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                    >
                        Informations Suplementaires
                    </Typography>
                    <div>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EtudiantProfile