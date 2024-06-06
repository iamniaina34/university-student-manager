import { Close } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable';

function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

function DialogConfirmation({ isOpened, title, content, onConfirm, onCancel, onClose }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
        onClose();
    };

    const handleConfirm = () => {
        onConfirm();
        handleClose;
    }

    const handleCancel = () => {
        onCancel();
        handleClose();
    }

    useEffect(() => {
        setOpen(isOpened)
    }, [isOpened])

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="draggable-dialog-title"
            maxWidth={'xs'}
            open={open}
            PaperComponent={PaperComponent}
        >
            <DialogTitle style={{ cursor: 'move' }} sx={{ m: 0, p: 2 }} id="draggable-dialog-title">
                {title}
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                {content}
            </DialogContent>
            <DialogActions
            sx={{
                height: '64px',
            }}
            >
                <Button
                    variant='contained'
                    color='error'
                    size='small'
                    disableElevation
                    onClick={handleConfirm}
                >
                    Confirmer
                </Button>
                <Button
                    variant='text'
                    color='secondary'
                    size='small'
                    disableElevation
                    onClick={handleCancel}
                >
                    Annuler
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogConfirmation