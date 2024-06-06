import { Avatar } from '@mui/material'
import React from 'react'

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

function EtudiantAvatar({ etudiant }) {
    const fullName = `${etudiant.nom || ''} ${etudiant.prenom || ''}`;
    const initials = fullName.split(' ', 2).map(name => name[0]).join('').toUpperCase();
    return (
        <div className='w-full h-full flex justify-start items-center'>
            <Avatar sx={{
                width: '2.2rem',
                height: '2.2rem',
                backgroundColor: stringToColor(fullName)
            }}>
                <span className='text-sm'>{initials}</span>
            </Avatar>
        </div>
    )
}

export default EtudiantAvatar