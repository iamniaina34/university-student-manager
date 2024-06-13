import React, { useEffect, useState } from 'react';
import { EtudiantAPI, NiveauAPI, ParcoursAPI } from '../../../api/entities';
import EtudiantList from './EtudiantList';
import Heading from '../../../components/Heading';
import EtudiantController from './EtudiantController';
import EtudiantDeleteSnackbar from '../../../components/EtudiantDeleteSnackbar';
import { HttpStatusCode } from 'axios';
import EtudiantAddAllSnackbar from '../../../components/EtudiantAddAllSnackbar';

function Etudiants() {
    const [etudiants, setEtudiants] = useState([]);
    const [deletedEtudiants, setDeletedEtudiants] = useState([]);
    const [filteredEtudiants, setFilteredEtudiants] = useState([]);
    const [niveaux, setNiveaux] = useState([]);
    const [parcours, setParcours] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [selectedNiveau, setSelectedNiveau] = useState('');
    const [selectedParcours, setSelectedParcours] = useState('');
    const [etudiantDeleteSnackbarOpen, setEtudiantDeleteSnackbarOpen] = useState(false);
    const [etudiantAddAllSnackbarOpen, setEtudiantAddAllSnackbarOpen] = useState(false);
    const [effectif, setEffectif] = useState(0);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleRefresh = () => {
        console.log(refreshKey);
        setRefreshKey((prev) => (prev + 1))
    }

    const handleEtudiantEdited = (editedEtudiant, oldMatricule) => {
        console.log(`edited: ${oldMatricule}`);
        const index = etudiants.findIndex(etudiant => etudiant.numeroMatricule === oldMatricule)
        if (index !== -1) {
            let alteredEtudiants = [...etudiants]
            alteredEtudiants[index] = {
                ...editedEtudiant,
                niveau: niveaux.find(n => n.niveauId === editedEtudiant.niveau.niveauId),
                parcours: parcours.find(p => p.parcoursId === editedEtudiant.parcours.parcoursId),
            }
            setEtudiants(alteredEtudiants);
        }
    }

    const handleEtudiantDeleted = (numeroMatriculeList) => {
        const updatedDeletedEtudiants = etudiants.filter(etudiant => numeroMatriculeList.includes(etudiant.numeroMatricule));
        setDeletedEtudiants(updatedDeletedEtudiants);

        const updatedEtudiants = etudiants.filter(etudiant => !numeroMatriculeList.includes(etudiant.numeroMatricule));
        setEtudiants(updatedEtudiants);

        setEtudiantDeleteSnackbarOpen(true);
    };

    const handleEtudiantDeleteSnackbarUndo = () => {
        console.log(etudiants);
        console.log(deletedEtudiants);

        setEtudiants((prev) => [
            ...prev,
            ...deletedEtudiants.map(etudiant => ({
                ...etudiant,
            })),
        ]);
        handleRefresh();
        setEtudiantDeleteSnackbarOpen(false);
    }

    const handleEtudiantDeleteSnackbarClose = () => {
        setEtudiantDeleteSnackbarOpen(false);
        const list = deletedEtudiants.map(etudiant => etudiant.numeroMatricule);
        EtudiantAPI.deleteByIdList(list)
            .then(res => {
                if (res.status === HttpStatusCode.Ok) {
                    console.log('deleted: ' + ids);
                }
            })
            .catch(err => {
                err.response && console.error(err.response.data)
            })
    }

    const showEtudiantAddAllSnackbar = () => {
        setEtudiantAddAllSnackbarOpen(true);
    }

    const handleEtudiantAddAllSnackbarClose = () => {
        setEtudiantAddAllSnackbarOpen(false);
        setEffectif(0);
    }

    useEffect(() => {
        EtudiantAPI.index()
            .then(response => {
                setEtudiants(response.data);
                setFilteredEtudiants(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        NiveauAPI.index()
            .then(response => {
                setNiveaux(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        ParcoursAPI.index()
            .then(response => {
                setParcours(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [refreshKey]);

    useEffect(() => {
        filterEtudiants();
    }, [searchValue, selectedNiveau, selectedParcours, etudiants]);

    const filterEtudiants = () => {
        let filtered = etudiants;

        if (searchValue) {
            filtered = filtered.filter(etudiant =>
                etudiant.numeroMatricule.toLowerCase().includes(searchValue.toLowerCase())
                ||
                etudiant.nom.toLowerCase().includes(searchValue.toLowerCase())
                ||
                etudiant.prenom.toLowerCase().includes(searchValue.toLowerCase())
            );
        }

        if (selectedNiveau) {
            filtered = filtered.filter(etudiant => etudiant.niveau.niveauId === selectedNiveau);
        }

        if (selectedParcours) {
            filtered = filtered.filter(etudiant => etudiant.parcours.parcoursId === selectedParcours);
        }

        setFilteredEtudiants(filtered);
    };

    const handleSearchValueChange = (value) => {
        setSearchValue(value);
    };

    const handleNiveauChange = (value) => {
        setSelectedNiveau(value);
    };

    const handleParcoursChange = (value) => {
        setSelectedParcours(value);
    };

    const handleEtudiantAdded = (etudiant) => {
        etudiant.niveau = niveaux.filter(niveau => niveau.niveauId === etudiant.niveau.niveauId).at(0);
        etudiant.parcours = parcours.filter(parcours => parcours.parcoursId === etudiant.parcours.parcoursId).at(0);
        console.log(`etudiant added: ${etudiant.numeroMatricule}`);
        setEtudiants((prevEtudiants) => ([
            ...prevEtudiants,
            etudiant
        ]));
    };

    const handleImport = (etudiants) => {
        EtudiantAPI.postAll(etudiants)
            .then(r => {
                if (r.status === HttpStatusCode.Created) {
                    setEtudiants((prev) => [
                        ...prev,
                        ...etudiants.map(etudiant => ({
                            ...etudiant,
                        })),
                    ]);
                    setEffectif(etudiants.length)
                    showEtudiantAddAllSnackbar()
                }
            })
            .catch(e => console.log(e));
    }

    return (
        <React.Fragment>
            <Heading label={'Liste des étudiants'} />
            <EtudiantController
                niveaux={niveaux}
                parcoursList={parcours}
                onSearchValueChange={handleSearchValueChange}
                onNiveauChange={handleNiveauChange}
                onParcoursChange={handleParcoursChange}
                onEtudiantAdded={handleEtudiantAdded}
                onImport={handleImport}
            />
            <EtudiantList
                rows={filteredEtudiants}
                onRefresh={handleRefresh}
                onEtudiantEdited={handleEtudiantEdited}
                onEtudiantDeleted={handleEtudiantDeleted}
            />
            <EtudiantAddAllSnackbar
                effectif={effectif}
                open={etudiantAddAllSnackbarOpen}
                onClose={handleEtudiantAddAllSnackbarClose}
            />

            <EtudiantDeleteSnackbar
                etudiants={deletedEtudiants}
                key={'etudiantDeleteSnackbar'}
                onClose={handleEtudiantDeleteSnackbarClose}
                onUndo={handleEtudiantDeleteSnackbarUndo}
                open={etudiantDeleteSnackbarOpen}
            />
        </React.Fragment>
    );
}

export default Etudiants;
