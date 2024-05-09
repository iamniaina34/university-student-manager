import { Avatar, Typography } from '@mui/material';
import React from 'react'
import EtudiantListItemMoreHorizButton from './EtudiantListItemMoreHorizButton';

function EtudiantListItem({ etudiant }) {

    const fullName = etudiant.nom + ' ' + etudiant.prenom;
    const avatarString = etudiant.nom[0] + etudiant.prenom[0];

    return (
        <React.Fragment>
            <div className='flex justify-between items-center w-full px-4 py-2 rounded-xl hover:bg-gray-100 hover:transition-all duration-75 ease-out cursor-default' onClick={() => console.log("You like clicking ?")}>
                <div className='flex gap-4 items-center'>
                    <div>
                        <Avatar sx={{ cursor: 'pointer', width: '2.4rem', height: '2.4rem' }}><Typography fontSize='1rem'>{avatarString} </Typography></Avatar>
                    </div>
                    <div>
                        <Typography variant='body1' fontSize={16} fontWeight='bold'>{fullName}</Typography>
                        <Typography variant='body2' color='textSecondary' fontSize={12}>{etudiant.numeroMatricule}</Typography>
                    </div>
                </div>
                <div>
                    <EtudiantListItemMoreHorizButton etudiant={etudiant}/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default EtudiantListItem