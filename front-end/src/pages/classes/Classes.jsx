import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar';
import { Typography } from '@mui/material';

function Classes() {

    useEffect(() => {
        // Todo
    }, []);

    return (
        <div className="body-container">
            <NavBar />
            <div className="scroll-container">
                <Typography className='flex justify-center text-red-900'>Classes</Typography>
            </div>
        </div>
    );
}

export default Classes