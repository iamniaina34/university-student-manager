import * as React from 'react';
import { GridPagination, GridSelectedRowCount, GridToolbarContainer } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { RefreshTwoTone } from '@mui/icons-material';

function CustomToolbar({ selectedRows, onRefresh, onEdit, onDelete }) {
    return (
        <GridToolbarContainer
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mx: '2px',
            }}
        >
            <div className='flex gap-1'>
                <IconButton
                    onClick={() => onRefresh()}
                    sx={{
                        ":hover": {
                            color: 'black',
                        },
                    }}
                >
                    <RefreshTwoTone fontSize='small' />
                </IconButton>
                {selectedRows.length === 1 && (
                    <IconButton
                        onClick={() => onEdit(selectedRows[0])}
                        sx={{
                            ":hover": {
                                color: 'black',
                            },
                        }}
                    >
                        <EditIcon fontSize='small' />
                    </IconButton>
                )}
                {selectedRows.length > 0 && (
                    <IconButton
                        onClick={() => onDelete(selectedRows)}
                        sx={{
                            ":hover": {
                                color: '#ee0000',
                            },
                        }}
                    >
                        <DeleteIcon fontSize='small' />
                    </IconButton>
                )}
                {selectedRows.length !== 0 && (
                    <GridSelectedRowCount
                        selectedRowCount={selectedRows.length}
                        sx={{
                            color: 'gray',
                            fontWeight: '100',
                        }}
                    />
                )}
            </div>
            <div className='flex'>
                <GridPagination size='small' />
            </div>
        </GridToolbarContainer>
    );
}

export default CustomToolbar;
