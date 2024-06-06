import { Close } from '@mui/icons-material';
import { Dialog, DialogContent, DialogTitle, IconButton, Paper } from '@mui/material';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Draggable from 'react-draggable';

function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

function DialogForm({ open, title, children, onClose }) {
    const [dialogFormTitle, setDialogFormTitle] = useState(title)
    const [isOpened, setIsOpened] = useState(false);

    const handleClose = () => {
        onClose();
        setIsOpened(false);
    };

    useEffect(() => {
        setIsOpened(open);
    }, [open]);

    useEffect(() => {
        setDialogFormTitle(title);
    }, [title]);

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="draggable-dialog-title"
            open={isOpened}
            PaperComponent={PaperComponent}
            maxWidth={'xs'}
        >
            <DialogTitle style={{ cursor: 'move' }} sx={{ m: 0, p: 2 }} id="draggable-dialog-title">
                {dialogFormTitle}
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
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default DialogForm