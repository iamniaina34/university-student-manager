import { Typography } from '@mui/material'
import React from 'react'

function EmptyEtudiantListItem() {
    return (
        <React.Fragment>
            <div className='flex self-center gap-8 h-full w-96 p-8 border-gray-50 rounded-xl shadow-sm hover:shadow-md hover:scale-105 hover:transition-all duration-100 ease-linear cursor-default'>
                <div className='basis-1/2'>
                    <Typography variant='h1' fontWeight={700} align='center'>{":("}</Typography>
                </div>
                <div className='basis-1/2 flex flex-col gap-2'>
                    <Typography variant='h6' noWrap>Toutes nos excuses</Typography>
                    <Typography>Désolé, on a trouvé aucun etudiant</Typography>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EmptyEtudiantListItem