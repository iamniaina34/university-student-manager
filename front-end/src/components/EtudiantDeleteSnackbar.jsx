import { Button, Slide, Snackbar, SnackbarContent } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';

function EtudiantDeleteSnackbar({ open = false, etudiants = [], onClose = () => { }, onUndo = () => { } }) {
    const [isOpen, setIsOpen] = useState(false);
    const [deletedEtudiants, setDeletedEtudiants] = useState([])

    const handleClose = (event, reason) => {
        setIsOpen(false);
        setDeletedEtudiants([]);
        onClose();
    }

    const undoDelete = () => {
        onUndo();
    };

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    useEffect(() => {
        setDeletedEtudiants(etudiants)
    }, [etudiants])

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
            key={'etudiantAddSnackbar'}
        >
            <SnackbarContent
                sx={{
                    width: '360px',
                }}
                message={`${deletedEtudiants.length} ${deletedEtudiants.length > 1 ? 'étudiants ont été supprimé(e)s' : 'étudiant a été supprimé(e)'}`}
                action={
                    <div className='flex flex-row gap-0.5'>
                        <Button
                            onClick={undoDelete}
                            variant='text'
                            color='primary'
                            size='small'
                            disabled={!deletedEtudiants}
                        >
                            Defaire
                        </Button>
                    </div>
                }
            />
        </Snackbar>
    );
}

export default EtudiantDeleteSnackbar;