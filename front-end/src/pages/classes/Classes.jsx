import React, { useEffect } from 'react'
import { Typography } from '@mui/material';

function Classes() {

    useEffect(() => {
        // Todo
    }, []);

    return (
        <React.Fragment>
            <div className='p-4 px-0 flex justify-between items-center'>
                <Typography variant='h5' fontWeight={600} sx={{ color: '#111111' }}>
                    Liste des classes
                </Typography>
            </div>
        </React.Fragment>
    );
}

export default Classes