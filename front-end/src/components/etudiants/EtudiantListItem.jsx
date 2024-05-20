import React from 'react';
import { Avatar, Typography } from '@mui/material';
import EtudiantListItemMoreHorizButton from './EtudiantListItemMoreHorizButton';
import { redirect, useNavigate } from 'react-router-dom';

function stringToColor(string) {
    let hash = 0;
    let i;
    let color = '#';

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
}

function EtudiantListItem({ etudiant }) {

    const fullName = `${etudiant.nom} ${etudiant.prenom}`;
    const avatarString = etudiant.prenom ? `${etudiant.nom[0]}${etudiant.prenom[0]}` : etudiant.nom[0];
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(`/etudiants/${etudiant.numeroMatricule}`);
    }

    return (
        <div className='flex justify-between items-center w-full px-4 py-3 rounded-2xl hover:bg-gray-100 hover:transition-all duration-75 ease-out cursor-default'>
            <div className='flex gap-4 items-center w-full'>
                <div>
                    <Avatar sx={{ cursor: 'pointer', width: '2.4rem', height: '2.4rem', backgroundColor: stringToColor(etudiant.prenom ? `${etudiant.nom}${etudiant.prenom}` : etudiant.nom) }}>
                        <Typography fontSize='0.9rem'>{avatarString}</Typography>
                    </Avatar>
                </div>
                <div className='w-full' onClick={handleRedirect}>
                    <Typography variant='body1' fontSize={16} fontWeight='bold'>{fullName}</Typography>
                    <Typography variant='body2' color='textSecondary' fontSize={12}>{etudiant.numeroMatricule}</Typography>
                </div>
            </div>
            <div>
                <EtudiantListItemMoreHorizButton etudiant={etudiant} />
            </div>
        </div>
    );
}

export default EtudiantListItem;
