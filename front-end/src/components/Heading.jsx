import { Typography } from '@mui/material'
import React from 'react'

function Heading({label}) {
    return (
        <div className='h-10 sticky flex justify-between items-center'>
            <Typography variant='h5' fontWeight={600} sx={{ color: '#111111' }}>
                {label}
            </Typography>
        </div>
    )
}

export default Heading