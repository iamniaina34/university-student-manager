import { Slide, Snackbar, SnackbarContent } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';

function EtudiantAddAllSnackbar({ open = false, onClose = () => { }, effectif }) {
    const [isOpen, setIsOpen] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsOpen(false);
        onClose();
    }

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    useEffect(() => {
        setQuantity(effectif);
    }, [effectif]);

    const SlideTransition = (props) => {
        return <Slide {...props} direction="up" />;
    };

    return (
        <Snackbar
            anchorOrigin={{
                horizontal: 'right',
                vertical: 'bottom'
            }}
            open={isOpen}
            onClose={handleClose}
            TransitionComponent={SlideTransition}
            autoHideDuration={5000}
            key={'etudiantAddAllSnackbar'}
        >
            <SnackbarContent
                message={`${quantity} ${quantity === 1 ? 'étudiant(e) ajouté(e)' : 'étudiant(e)s ont été ajouté(e)s'} `}
                sx={{
                    width: 'fit-content',
                }}
            />
        </Snackbar>
    );
}

export default EtudiantAddAllSnackbar;
