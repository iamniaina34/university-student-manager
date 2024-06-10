import React, { useState } from 'react'
import DialogForm from './DialogForm'
import EtudiantForm from './forms/EtudiantForm';
import { useEffect } from 'react';
import { Etudiant } from '../models/model';
import { EtudiantAPI } from '../api/entities';
import { HttpStatusCode } from 'axios';
import { Backdrop, CircularProgress } from '@mui/material';

/**
 * @typedef {'nom' | 'prenom' | 'dateNaissance' | 'lieuNaissance' | 'cin' | 'dateCin' | 'matricule' | 'niveau' | 'parcours' | 'adresse' | 'telephone'} field_name
 */

/**
 * @typedef {'add' | 'edit'} usage_type
 */

/**
 * @param {Object} param0
 * @param {field_name} param0.errorSource
 * @param {usage_type} param0.usage
 */

function EtudiantDialogForm({ open, title, usage, etudiant, errorSource, errorHelperText, onClose, onEtudiantAdded, onEtudiantEdited, onError }) {
    const [isOpen, setIsOpen] = useState(false);
    const [etudiantDialogTitle, setEtudiantDialogTitle] = useState('')
    const [error, setError] = useState(errorSource || '');
    const [errorText, setErrorText] = useState(errorHelperText || '');
    const [passedEtudiant, setPassedEtudiant] = useState(etudiant || Etudiant);

    const initError = () => {
        setError('');
        setErrorText('');
    };

    const handleClose = () => {
        onClose();
        initError();
        setPassedEtudiant(Etudiant);
        setIsOpen(false);
    }

    const handleCancel = () => {
        handleClose();
    }

    const handleAddEtudiant = (etudiant) => {
        EtudiantAPI
            .post(etudiant)
            .then(response => {
                if (response.status === HttpStatusCode.Created) {
                    handleClose();
                    onEtudiantAdded(etudiant);
                } else {
                    console.log(`Etudiant ${etudiant.numeroMatricule} not added. Reason: ${response.message}`);
                }
            })
            .catch(error => {
                if (error.response) {
                    const data = error.response.data.toLowerCase();
                    console.log(data);
                    if (data.includes('duplicate')) {
                        if (data.includes('matricule')) {
                            setError('matricule');
                        }
                        else if (data.includes('cin')) {
                            setError('cin');
                        }
                        else if (data.includes('telephone')) {
                            setError('telephone');
                        }
                        setErrorText('Valeur déjà assignée à un autre Étudiant');
                    }
                    else {
                        onError(data);
                    }
                }
            });
    }

    const hanldeEditEtudiant = (etudiant, oldMatricule) => {
        if (oldMatricule !== null && oldMatricule !== '') {
            EtudiantAPI.put(oldMatricule, etudiant)
                .then(r => {
                    if (r.status === HttpStatusCode.Ok) {
                        onEtudiantEdited(etudiant, oldMatricule);
                        handleClose();
                    } else {
                        console.error(`Couldn't edit etudiant`);
                    }
                })
                .catch(e => {
                    if (e.response) {
                        const data = e.response.data.toLowerCase();
                        console.error(data);
                        if (data.includes('not found')) {
                            setErrorText('Vous ne pouvez pas changer la valeur de ce champs')
                            if (data.includes('matricule')) {
                                setError('matricule');
                            }
                        }
                        else if (data.includes('duplicate')) {
                            setErrorText('Valeur déjà assignée à un autre Étudiant');
                            if (data.includes('matricule')) {
                                setError('matricule');
                            }
                            else if (data.includes('cin')) {
                                setError('cin');
                            }
                            else if (data.includes('telephone')) {
                                setError('telephone');
                            }
                        }
                        else if (data.includes('mismatch')) {
                            setErrorText('Vous ne pouvez pas changer sa valeur');
                            if (data.includes('matricule')) {
                                setError('matricule');
                            }
                        }
                        else {
                            onError(data);
                        }
                    }
                })
        }
        else {
            console.error(`oldMatricule undefined`);
        }
    }

    const handleSubmit = (etudiant, oldMatricule) => {
        initError();
        switch (usage) {
            case 'add':
                handleAddEtudiant(etudiant)
                break;
            case 'edit':
                hanldeEditEtudiant(etudiant, oldMatricule)
                break;
            default:
                console.error(`Wrong usage value`);
                break;
        }
    }

    useEffect(() => {
        setIsOpen(open);
        initError();
    }, [open]);

    useEffect(() => {
        setPassedEtudiant(etudiant);
    }, [etudiant]);

    useEffect(() => {
        setEtudiantDialogTitle(title);
    }, [title]);

    useEffect(() => {
        setError(errorSource);
    }, [errorSource]);

    useEffect(() => {
        setErrorText(errorHelperText)
    }, [errorHelperText]);

    return (
        <DialogForm
            open={isOpen}
            title={etudiantDialogTitle}
            onClose={handleClose}
        >
            <EtudiantForm
                usage={usage}
                etudiant={passedEtudiant}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                errorSource={error}
                errorHelperText={errorText}
            />
        </DialogForm>
    );
}

export default EtudiantDialogForm