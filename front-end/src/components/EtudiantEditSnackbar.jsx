import { Button, Slide, Snackbar, SnackbarContent } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EtudiantAPI } from '../api/entities';
import { HttpStatusCode } from 'axios';

function EtudiantEditSnackbar({ open = false, oldEtudiant, newEtudiant, onClose = () => { }, onUndo = () => { } }) {
    const [isOpen, setIsOpen] = useState(false);
    const [oldValue, setOldValue] = useState(oldEtudiant);
    const [newValue, setNewValue] = useState(newEtudiant);
    const navigate = useNavigate();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsOpen(false);
        setOldValue({});
        setNewValue({});
        onClose();
    }

    const consulterEtudiant = () => {
        if (newValue.numeroMatricule !== '' && newValue.numeroMatricule !== null) {
            navigate(`/etudiants/${newValue.numeroMatricule}`);
        }
    };

    const undoChanges = () => {
        if (oldValue !== null && newValue !== null) {
            const updatedOldValue = {
                ...oldValue,
                niveau: {
                    niveauId: oldValue.niveau.niveauId,
                },
                parcours: {
                    parcoursId: oldValue.parcours.parcoursId,
                },
            };
            EtudiantAPI
                .put(newValue.numeroMatricule, updatedOldValue)
                .then(r => {
                    if (r.status === HttpStatusCode.Ok) {
                        handleClose();
                        onUndo();
                    } else {
                        console.log("Response status not OK: ", r);
                    }
                })
                .catch(e => {
                    console.log("Error: ", e);
                });
        }
    };

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    useEffect(() => {
        setOldValue(oldEtudiant);
    }, [oldEtudiant]);

    useEffect(() => {
        setNewValue(newEtudiant);
    }, [newEtudiant]);

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
                message="Étudiant modifié"
                action={
                    <div className='flex flex-row gap-0.5'>
                        <Button
                            onClick={undoChanges}
                            variant='text'
                            color='primary'
                            size='small'
                            disabled={!oldValue || !newValue}
                        >
                            Defaire
                        </Button>
                        <Button
                            onClick={consulterEtudiant}
                            variant='contained'
                            color='primary'
                            size='small'
                            disabled={!newValue || !newValue.numeroMatricule}
                        >
                            Consulter
                        </Button>
                    </div>
                }
            />
        </Snackbar>
    );
}

export default EtudiantEditSnackbar;
