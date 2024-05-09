import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Fade, IconButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { EtudiantAPI } from '../../api/entities';

export default function EtudiantListItemMoreHorizButton({ etudiant }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        event.stopPropagation();
        setAnchorEl(null);
    };
    const handleEdit = (e) => {
        handleClose(e)
        console.log("Edit");
    };
    const handleConfirmDelete = (event) => {
        confirm("Etes-vous sur ?") && handleDelete(event);
        handleClose(event);
    };
    const handleDelete = (e) => {
        console.log("delete");
        EtudiantAPI.delete(etudiant.numeroMatricule)
        window.location.reload();
    };

    return (
        <div>
            <Tooltip title='' placement='bottom' arrow>
                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <MoreHoriz />
                </IconButton>
            </Tooltip>
            <Menu
                id="basic-menu"
                elevation={3}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                getContentAnchorEl={null}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                <MenuItem onClick={handleEdit}>
                    <ListItemIcon>
                        <EditRoundedIcon fontSize='small' />
                    </ListItemIcon>
                    <ListItemText><span className='text-gray-800 text-sm'>Modifier</span></ListItemText>
                </MenuItem>
                <MenuItem onClick={handleConfirmDelete}>
                    <ListItemIcon>
                        <DeleteRoundedIcon fontSize='small' />
                    </ListItemIcon>
                    <ListItemText><span className='text-red-500 text-sm'>Supprimer</span></ListItemText>
                </MenuItem>
            </Menu>
        </div>
    );
}