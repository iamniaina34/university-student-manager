import * as React from 'react';
import { GridPagination, GridSelectedRowCount, GridToolbarContainer, GridToolbarDensitySelector } from '@mui/x-data-grid';
import { IconButton, createTheme } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { MoreVert, RefreshTwoTone } from '@mui/icons-material';

function MoreVertButton() {
    return (
        <IconButton
            disableTouchRipple
            sx={{
                ":hover": {
                    color: 'black',
                },
            }}
        >
            <MoreVert
                fontSize='small'
            />
        </IconButton>
    );
}

function RefreshButton({ onRefresh }) {
    return (
        <IconButton
            disableTouchRipple
            onClick={() => onRefresh()}
            sx={{
                ":hover": {
                    color: 'black',
                },
            }}
        >
            <RefreshTwoTone fontSize='small' />
        </IconButton>

    );
}

function EditButton({ onEdit }) {
    return (
        <IconButton
            disableTouchRipple
            onClick={onEdit}
            sx={{
                ":hover": {
                    color: 'black',
                },
            }}
        >
            <EditIcon
                fontSize='small'
                sx={{
                    height: 18,
                    width: 18,
                }}
            />
        </IconButton>
    );
}

function DeleteButton({ onDelete }) {
    return (
        <IconButton
            disableTouchRipple
            onClick={onDelete}
            sx={{
                ":hover": {
                    color: '#ee0000',
                },
            }}
        >
            <DeleteIcon
                fontSize='small'
                sx={{
                    height: 18,
                    width: 18,
                }}
            />
        </IconButton>
    );
}

function CustomToolbar({ selectedRows, onRefresh, onEdit, onDelete }) {
    const theme = createTheme();
    return (
        <GridToolbarContainer
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mx: '2px',
            }}
        >
            <div className='flex gap-1'>
                {/* <MoreVertButton /> */}
                {selectedRows.length === 0 && (
                    <RefreshButton
                        onRefresh={onRefresh}
                    />
                )}
                {selectedRows.length === 1 && (
                    <EditButton
                        onEdit={() => onEdit(selectedRows[0])}
                    />
                )}
                {selectedRows.length > 0 && (
                    <React.Fragment>
                        <DeleteButton
                            onDelete={() => onDelete(selectedRows)}
                        />
                        <GridSelectedRowCount
                            selectedRowCount={selectedRows.length}
                            sx={{
                                color: 'gray',
                                fontWeight: '100',
                                [theme.breakpoints.down('lg')]: {
                                    display: 'none',
                                },
                            }}
                        />
                    </React.Fragment>
                )}
            </div>
            <div className='flex'>
                <GridPagination size='small' />
            </div>
        </GridToolbarContainer>
    );
}

export default CustomToolbar;
