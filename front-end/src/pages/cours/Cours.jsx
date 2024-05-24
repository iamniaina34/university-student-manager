import React, { useEffect } from 'react'
import { Typography } from '@mui/material';

function Cours() {

    useEffect(() => {
    }, []);

    return (
        <React.Fragment>
            <div className='p-4 px-0 flex justify-between items-center'>
                <Typography variant='h5' fontWeight={600} sx={{ color: '#111111' }}>
                    Liste des cours
                </Typography>
            </div>
        </React.Fragment>
    )
}

export default Cours