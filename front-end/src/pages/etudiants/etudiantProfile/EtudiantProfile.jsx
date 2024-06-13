import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { EtudiantAPI } from '../../../api/entities';
import Heading from '../../../components/Heading';
import EtudiantAvatar from '../index/EtudiantAvatar';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';

function DataShower({ label, value = "" }) {
    return (
        <div className='w-full flex flex-row justify-start items-center'>
            <div id="label" className='basis-2/12 w-fit'>
                <Typography
                    variant='subtitle2'
                    fontSize={14}
                >
                    {label}
                </Typography>
            </div>
            <div id="value" className='basis-full'>
                <Typography
                    variant='subtitle1'
                    fontSize={14}
                >
                    {value}
                </Typography>
            </div>
        </div>
    );
}

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
            <div className='flex flex-col gap-4'>
                <div className='w-full p-2 flex flex-row gap-4 border rounded-lg shadow-slate-200'>
                    <div className='w-fit h-fit'>
                        <EtudiantAvatar etudiant={etudiant} size={'5rem'} fontSize={'36px'} roundedFull={true} />
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
                                fontSize={12}
                                sx={{
                                    color: '#888888',
                                }}
                            >
                                {etudiant.numeroMatricule}
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                fontWeight={500}
                                fontSize={12}
                                sx={{
                                    color: '#888888',
                                }}
                            >
                                {etudiant.niveau ? etudiant.niveau.niveauAcro : ''} {etudiant.parcours ? etudiant.parcours.parcoursAcro : ''}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div id="infoG" className='px-4 py-2 flex flex-col border rounded-lg'>
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{
                            fontSize: '16px',
                            mb: '16px',
                        }}
                    >
                        Informations Générales
                    </Typography>
                    <DataShower label={'Nom'} value={etudiant.nom} />
                    <DataShower label={'Prénom'} value={etudiant.prenom} />
                    <DataShower label={'Date de naissance'} value={dayjs(etudiant.dateNaissance).format('DD/MM/YYYY')} />
                    <DataShower label={'Lieu de naissance'} value={(etudiant.lieuNaissance !== null && etudiant.lieuNaissance !== '') ? etudiant.lieuNaissance : 'Inconnu'} />
                    <DataShower label={'CIN'} value={(etudiant.cin !== null && etudiant.cin !== '') ? etudiant.cin : 'Inconnu'} />
                <DataShower label={'Date de délivrance'} value={(etudiant.dateCin !== null || etudiant.dateCin === '') ? dayjs(etudiant.dateCin).format('DD/MM/YYYY') : 'Inconnu'} />
                </div>
                <div id="infoSco" className='px-4 py-2 flex flex-col border rounded-lg'>
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{
                            fontSize: '16px',
                            mb: '16px',
                        }}
                    >
                        Informations Scolaires
                    </Typography>
                    <DataShower label={'Numero matricule'} value={etudiant.numeroMatricule} />
                    <DataShower label={'Niveau'} value={`${etudiant.niveau ? etudiant.niveau.niveauDesign : ''} (${etudiant.niveau ? etudiant.niveau.niveauAcro : ''})`} />
                    <DataShower label={'Parcours'} value={`${etudiant.parcours ? etudiant.parcours.parcoursDesign : ''} (${etudiant.parcours ? etudiant.parcours.parcoursAcro : ''})`} />
                </div>
                <div id="infoSup" className='px-4 py-2 flex flex-col border rounded-lg'>
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{
                            fontSize: '16px',
                            mb: '16px',
                        }}
                    >
                        Informations Supplémentaires
                    </Typography>
                    <DataShower label={'Adresse'} value={etudiant.adresse !== null && etudiant.adresse !== '' ? etudiant.adresse : 'Inconnu'} />
                    <DataShower label={'Téléphone'} value={etudiant.numeroTelephone !== null && etudiant.numeroTelephone !== '' ? etudiant.numeroTelephone : 'Inconnu'} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default EtudiantProfile