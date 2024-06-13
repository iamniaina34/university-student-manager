import { Button, Slide, Snackbar, SnackbarContent } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EtudiantAddSnackbar({ open = false, onClose = () => { }, matricule = '' }) {
    const [isOpen, setIsOpen] = useState(false);
    const [resultingMatricule, setResultingMatricule] = useState('')
    const navigate = useNavigate();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsOpen(false);
        onClose();
    }

    const handleButtonClick = () => {
        if (resultingMatricule !== '' && resultingMatricule !== null) {
            navigate(`/etudiants/${resultingMatricule}`);
        }
    };

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    useEffect(() => {
        setResultingMatricule(matricule);
    }, [matricule]);

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
                message="Étudiant ajouté"
                sx={{
                    width: '360px',
                }}
                action={
                    <Button
                        onClick={handleButtonClick}
                        variant='contained'
                        color='info'
                        size='small'
                        disabled={resultingMatricule === '' || resultingMatricule === null}
                    >
                        Consulter
                    </Button>
                }
            />
        </Snackbar>
    );
}

export default EtudiantAddSnackbar;
