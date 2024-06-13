import * as React from 'react';
import { GridPagination, GridSelectedRowCount, GridToolbarContainer, GridToolbarDensitySelector } from '@mui/x-data-grid';
import { IconButton, Tooltip, createTheme } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { MoreVert, RefreshTwoTone, SaveAlt, Upload } from '@mui/icons-material';

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
        <Tooltip title="Rafraîchir">
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
        </Tooltip>
    );
}

function ExportButton({ onExport }) {
    return (
        <Tooltip title='Télécharger en Excel'>
            <IconButton
                disableTouchRipple
                onClick={() => onExport()}
                sx={{
                    ":hover": {
                        color: 'black',
                    },
                }}
            >
                <SaveAlt fontSize='small' />
            </IconButton>
        </Tooltip>
    );
}

function EditButton({ onEdit }) {
    return (
        <Tooltip title='Modifier'>
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
        </Tooltip>
    );
}

function DeleteButton({ onDelete }) {
    return (
        <Tooltip title='Supprimer'>
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
        </Tooltip>
    );
}

function CustomToolbar({ selectedRows, onRefresh, onEdit, onDelete, onExport }) {
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
                    <React.Fragment>
                        <RefreshButton
                            onRefresh={onRefresh}
                        />
                        <ExportButton
                            onExport={onExport}
                        />
                    </React.Fragment>
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
