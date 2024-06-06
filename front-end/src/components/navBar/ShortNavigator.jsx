import { ChevronLeftRounded, ChevronRightRounded, RefreshRounded } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import React from 'react'

function ShortNavigator() {
	return (
		<div className='h-10 flex items-center gap-1'>
			<div>
				<Tooltip title="Retourner">
					<IconButton size='small' sx={{padding: 0}}>
						<ChevronLeftRounded fontSize='large' />
					</IconButton>
				</Tooltip>
			</div>
			<div>
				<Tooltip title="Avancer">
					<IconButton size='small' sx={{padding: 0}}>
						<ChevronRightRounded fontSize='large' />
					</IconButton>
				</Tooltip>
			</div>
			<div>
				<Tooltip title="Rafraïchir">
					<IconButton size='medium'>
						<RefreshRounded fontSize='medium' />
					</IconButton>
				</Tooltip>
			</div>
		</div>
	);
}

export default ShortNavigator