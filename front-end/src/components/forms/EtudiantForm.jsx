import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { Etudiant } from '../../models/model';
import { NiveauAPI, ParcoursAPI } from '../../api/entities';

function EtudiantForm({ usage, onSubmit, onCancel, etudiant, errorSource, errorHelperText }) {
    const regexAlpha = /^[a-zA-ZÀ-ÿ\s]*$/;
    const regexNumeric = /^[0-9]*$/;
    const enceintes = ["H-F", "H-T"];
    const [niveaux, setNiveaux] = useState([]);
    const [parcoursList, setParcoursList] = useState([]);

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [lieuNaissance, setLieuNaissance] = useState('');
    const [cin, setCin] = useState('');
    const [dateCin, setDateCin] = useState('')
    const [matricule, setMatricule] = useState('');
    const [enceinte, setEnceinte] = useState('');
    const [niveau, setNiveau] = useState('');
    const [parcours, setParcours] = useState('');
    const [adresse, setAdresse] = useState('');
    const [telephone, setTelephone] = useState('');
    const [alteredEtudiant, setAlteredEtudiant] = useState(Etudiant);
    const [error, setErrorSource] = useState('')
    const [errorText, setErrorHelperText] = useState('Erreur');

    const handleNomChange = (event) => {
        const { value } = event.target;
        if (!regexAlpha.test(value)) return;
        setNom(value.toUpperCase())
    };

    const handlePrenomChange = (event) => {
        const { value } = event.target;
        if (!regexAlpha.test(value)) return;
        setPrenom(value)
    };

    const handleDateNaissanceChange = (newValue) => {
        setDateNaissance(newValue.format('YYYY-MM-DD'));
    };

    const handleLieuNaissanceChange = (event) => {
        const { value } = event.target;
        setLieuNaissance(value);
    };

    const handleCinChange = (event) => {
        const value = event.target.value.replace(/\s/g, '');
        if (!regexNumeric.test(value) || value.length > 12) return;
        setCin(value);
    };

    const handleDateCinChange = (newValue) => {
        setDateCin(newValue.format('YYYY-MM-DD'));
    };

    const handleNumeroMatriculeChange = (event) => {
        const value = event.target.value.replace(/\D/g, '').slice(0, 4);
        setMatricule(value);
    };

    const handleEnceinteChange = (event) => {
        const { value } = event.target;
        setEnceinte(value);
    };

    const handleNiveauChange = (event) => {
        const { value } = event.target;
        setNiveau(value)
    };

    const handleParcoursChange = (event) => {
        const { value } = event.target;
        setParcours(value)
    };

    const handleAdresseChange = (event) => {
        const value = event.target.value;
        setAdresse(value);
    };

    const handleTelephoneChange = (event) => {
        const value = event.target.value.replace(/\s/g, '');
        if (!regexNumeric.test(value) || value.length > 10) return;
        setTelephone(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorSource('');
        setErrorHelperText('');

        if (parseInt(alteredEtudiant.numeroMatricule.replace(/\D/g, '').slice(0, 4)) === 0) {
            console.error(`numero_matricule ${alteredEtudiant.numeroMatricule} invalid`);
            setErrorSource('matricule');
            setErrorHelperText('Le numero d\'immatriculation ne peut être 0');
            return;
        } else if (alteredEtudiant.cin !== null && alteredEtudiant.cin !== '' && alteredEtudiant.cin.length !== 12 && dayjs().diff(alteredEtudiant.dateNaissance, 'years') >= 18) {
            console.error(`cin ${alteredEtudiant.cin} invalid`);
            setErrorSource('cin')
            setErrorHelperText(`Numero de CIN invalide.`)
            return;
        } else if (alteredEtudiant.numeroTelephone !== null && alteredEtudiant.numeroTelephone.length !== 10) {
            console.error(`numero_telephone ${alteredEtudiant.numeroTelephone} invalid`);
            setErrorSource('telephone')
            setErrorHelperText('Le numero de téléphone inseré est invalide.')
            return;
        }

        console.log(alteredEtudiant);
        onSubmit(alteredEtudiant, etudiant ? etudiant.numeroMatricule : '');
    };

    const handleCancel = () => {
        onCancel();
        setErrorSource('');
        setErrorHelperText('');
    };

    useEffect(() => {
        NiveauAPI.index()
            .then(r => setNiveaux(r.data))
            .catch(e => console.error(e));
        ParcoursAPI.index()
            .then(r => setParcoursList(r.data))
            .catch(e => console.error(e));
    }, []);

    useEffect(() => {
        const existingEtudiant = etudiant || Etudiant;

        setNom(existingEtudiant.nom ? existingEtudiant.nom.trim() : '')
        setPrenom(existingEtudiant.prenom ? existingEtudiant.prenom.trim() : '')
        setDateNaissance(existingEtudiant.dateNaissance || '')
        setLieuNaissance(existingEtudiant.lieuNaissance || '')
        setCin(existingEtudiant.cin || '')
        setDateCin(existingEtudiant.dateCin || '')
        setMatricule(existingEtudiant.numeroMatricule ? existingEtudiant.numeroMatricule.replace(/[^\d]/g, '') : '')
        setEnceinte(existingEtudiant.numeroMatricule ? existingEtudiant.numeroMatricule.replace(/[^a-zA-Z-]/g, '') : enceintes[0])
        setNiveau(existingEtudiant.niveau.niveauId || '')
        setParcours(existingEtudiant.parcours.parcoursId || '')
        setAdresse(existingEtudiant.adresse || '')
        setTelephone(existingEtudiant.numeroTelephone || '')
        setErrorSource(errorSource || '');
    }, [etudiant])

    useEffect(() => {
        setAlteredEtudiant((oldEtudiant) => ({
            ...oldEtudiant,
            nom: nom,
            prenom: prenom === '' ? null : prenom,
            dateNaissance: dateNaissance,
            lieuNaissance: lieuNaissance === '' ? null : lieuNaissance,
            cin: cin === '' ? null : cin,
            dateCin: dateCin === '' ? null : dateCin,
            numeroMatricule: `${matricule.padStart(4, '0') + enceinte}`,
            niveau: {
                niveauId: niveau,
            },
            parcours: {
                parcoursId: parcours,
            },
            adresse: adresse === '' ? null : adresse,
            numeroTelephone: telephone === '' ? null : telephone,
        }));
    }, [nom, prenom, dateNaissance, lieuNaissance, cin, dateCin, matricule, enceinte, niveau, parcours, adresse, telephone]);

    useEffect(() => {
        if (dayjs().diff(alteredEtudiant.dateNaissance, 'years') < 18 || !alteredEtudiant.cin) {
            console.log('making cin null');
            setAlteredEtudiant((oldEtudiant) => ({
                ...oldEtudiant,
                cin: null,
                dateCin: null,
            }));
        }
    }, [alteredEtudiant.dateNaissance, alteredEtudiant.cin]);

    useEffect(() => {
        setErrorSource(errorSource);
    }, [errorSource]);

    useEffect(() => {
        setErrorHelperText(errorHelperText);
    }, [errorHelperText])

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box component="form" method="post" onSubmit={handleSubmit} className='flex flex-col gap-4'>
                {/* INFORMATIONS GENERALES */}
                <div className='w-full flex flex-col gap-4'>
                    <Typography variant="subtitle2" gutterBottom>
                        Informations Générales
                    </Typography>
                    <div className='flex gap-4'>
                        <FormControl fullWidth>
                            <TextField
                                required
                                id="nom-textfield"
                                variant="outlined"
                                size="small"
                                placeholder="Cersei"
                                label="Nom"
                                name="nom"
                                error={error === 'nom'}
                                helperText={error === 'nom' ? errorText : ''}
                                value={nom}
                                onChange={handleNomChange}
                                inputProps={{
                                    maxLength: 64,
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                    size: 'small',
                                    sx: {
                                        fontSize: 'medium',
                                    },
                                }}
                                InputProps={{
                                    autoComplete: 'off',
                                    style: {
                                        borderRadius: '6px',
                                        fontSize: 'medium',
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                id="prenom-textfield"
                                variant="outlined"
                                size="small"
                                placeholder="Lannister"
                                label="Prénom"
                                name="prenom"
                                error={error === 'prenom'}
                                helperText={error === 'prenom' ? errorText : ''}
                                value={prenom}
                                onChange={handlePrenomChange}
                                inputProps={{
                                    maxLength: 64,
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                    size: 'small',
                                    sx: {
                                        fontSize: 'medium',
                                    },
                                }}
                                InputProps={{
                                    autoComplete: 'off',
                                    style: {
                                        borderRadius: '6px',
                                        fontSize: 'medium',
                                    },
                                }}
                            />
                        </FormControl>
                    </div>
                    <div className='w-full'>
                        <FormControl fullWidth required>
                            <DatePicker
                                label="Date de naissance"
                                format="DD/MM/YYYY"
                                defaultValue={dayjs()}
                                value={dayjs(dateNaissance)}
                                disableFuture
                                onChange={handleDateNaissanceChange}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '6px',
                                    },
                                    '& .MuiInputBase-input': {
                                        height: '7px',
                                    },
                                }}
                            />
                        </FormControl>
                    </div>
                    <FormControl fullWidth>
                        <TextField
                            id="lieuNaissance-textfield"
                            variant="outlined"
                            size="small"
                            placeholder="Castlerly Rock"
                            label="Lieu de naissance"
                            name="lieuNaissance"
                            error={error === 'lieuNaissance'}
                            helperText={error === 'lieuNaissance' ? errorText : ''}
                            value={lieuNaissance}
                            onChange={handleLieuNaissanceChange}
                            inputProps={{
                                maxLength: 64,
                                // pattern: "^[a-zA-ZÀ-ÿ\s]*$",
                            }}
                            InputLabelProps={{
                                shrink: true,
                                size: 'small',
                                sx: {
                                    fontSize: 'medium',
                                },
                            }}
                            InputProps={{
                                autoComplete: 'off',
                                style: {
                                    borderRadius: '6px',
                                    fontSize: 'medium',
                                },
                            }}
                        />
                    </FormControl>
                    {alteredEtudiant.dateNaissance && dayjs().diff(alteredEtudiant.dateNaissance, 'years') >= 18 && (
                        <div className='flex gap-4'>
                            <FormControl fullWidth>
                                <TextField
                                    required={dayjs().diff(alteredEtudiant.dateNaissance, 'years') > 18}
                                    id="cin-textfield"
                                    variant="outlined"
                                    size="small"
                                    placeholder="123456789012"
                                    label="CIN"
                                    name="cin"
                                    error={error === 'cin'}
                                    helperText={error === 'cin' ? errorText : ''}
                                    value={cin.replace(/(\d{3})(.{3})(.{3})(.{3})/, '$1 $2 $3 $4')}
                                    onChange={handleCinChange}
                                    inputProps={{
                                        maxLength: 12,
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                        size: 'small',
                                        sx: {
                                            fontSize: 'medium',
                                        },
                                    }}
                                    InputProps={{
                                        autoComplete: 'off',
                                        style: {
                                            borderRadius: '6px',
                                            fontSize: 'medium',
                                        },
                                    }}
                                />
                            </FormControl>
                            <FormControl fullWidth
                                error={error === 'dateCin'}
                            >
                                <DatePicker
                                    label="Date de délivrance du CIN"
                                    format="DD/MM/YYYY"
                                    value={dateCin === '' ? dayjs() : dayjs(dateCin)}
                                    disableFuture
                                    onChange={handleDateCinChange}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '6px',
                                        },
                                        '& .MuiInputBase-input': {
                                            height: '7px',
                                        },
                                    }}
                                />
                            </FormControl>
                        </div>
                    )}
                </div>
                {/* INFORMATIONS SCOLAIRES */}
                <div className='w-full flex flex-col gap-4'>
                    <Typography variant="subtitle2" gutterBottom>
                        Informations Scolaires
                    </Typography>
                    {usage === 'add' && (
                        <FormControl fullWidth>
                            <TextField
                                required
                                id="matricule-textfield"
                                variant="outlined"
                                size="small"
                                placeholder="1234"
                                label="Matricule"
                                name="matricule"
                                error={error === 'matricule'}
                                helperText={error === 'matricule' ? errorText : ''}
                                value={matricule}
                                onChange={handleNumeroMatriculeChange}
                                inputProps={{
                                    maxLength: 4,
                                    pattern: "^[0-9]*$",
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                    size: 'small',
                                    sx: {
                                        fontSize: 'medium',
                                    },
                                }}
                                InputProps={{
                                    autoComplete: 'off',
                                    endAdornment: (
                                        <FormControl sx={{
                                            width: 96,
                                            ':focus-within': {
                                                boxShadow: 'none',
                                                '& .Mui-focused': {
                                                    border: 0,
                                                },
                                            },
                                        }}
                                        >
                                            <Select
                                                labelId=''
                                                id='enceinte-select'
                                                label=''
                                                size='small'
                                                error={error === 'enceinte'}
                                                value={enceinte}
                                                onChange={handleEnceinteChange}
                                                sx={{
                                                    fontSize: 'medium',
                                                    borderRadius: '6px',
                                                    boxShadow: 'none',
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: 0,
                                                    },
                                                }}
                                            >
                                                {enceintes.map((enceinte) => (
                                                    <MenuItem
                                                        key={enceinte}
                                                        value={enceinte}
                                                        sx={{
                                                            fontSize: 'small',
                                                        }}
                                                    >
                                                        {enceinte}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    ),
                                    style: {
                                        borderRadius: '6px',
                                        fontSize: 'medium',
                                    },
                                }}
                                sx={{
                                    '& .MuiInputBase-root': {
                                        pr: '0px',
                                    },
                                }}
                            />
                        </FormControl>
                    )}
                    <div className='flex gap-4'>
                        <FormControl fullWidth required>
                            <InputLabel
                                id="niveau-select-label"
                                size='small'
                                sx={{
                                    fontSize: 'medium',
                                }}
                            >
                                Niveau
                            </InputLabel>
                            <Select
                                labelId='niveau-select-label'
                                id='niveau-select'
                                label="Niveau"
                                size='small'
                                error={error === 'niveau'}
                                value={niveau}
                                onChange={handleNiveauChange}
                                sx={{
                                    fontSize: 'medium',
                                    borderRadius: '8px',
                                }}
                            >
                                {niveaux.map((niveau) => (
                                    <MenuItem
                                        key={niveau.niveauId}
                                        value={niveau.niveauId}
                                        sx={{
                                            fontSize: 'small',
                                        }}
                                    >
                                        {niveau.niveauDesign}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth required>
                            <InputLabel
                                id="parcours-select-label"
                                size='small'
                                sx={{
                                    fontSize: 'medium',
                                }}
                            >
                                Parcours
                            </InputLabel>
                            <Select
                                labelId='parcours-select-label'
                                id='parcours-select'
                                label="Parcours"
                                size='small'
                                error={error === 'parcours'}
                                value={parcours}
                                onChange={handleParcoursChange}
                                sx={{
                                    fontSize: 'medium',
                                    borderRadius: '8px',
                                }}
                            >
                                {parcoursList.map((parcours) => (
                                    <MenuItem
                                        key={parcours.parcoursId}
                                        value={parcours.parcoursId}
                                        sx={{
                                            fontSize: 'small',
                                        }}
                                    >
                                        {parcours.parcoursAcro}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                {/* INFORMATIONS SUPPLEMENTAIRES */}
                <div className='w-full flex flex-col gap-4'>
                    <Typography variant="subtitle2" gutterBottom>
                        Informations Supplémentaires
                    </Typography>
                    <FormControl fullWidth>
                        <TextField
                            multiline
                            id="adresse-textfield"
                            variant="outlined"
                            size="small"
                            placeholder="Port Real"
                            label="Adresse"
                            name="adresse"
                            error={error === 'adresse'}
                            helperText={error === 'adresse' ? errorText : ''}
                            value={adresse}
                            onChange={handleAdresseChange}
                            inputProps={{
                                maxLength: 255,
                            }}
                            InputLabelProps={{
                                shrink: true,
                                size: 'small',
                                sx: {
                                    fontSize: 'medium',
                                }
                            }}
                            InputProps={{
                                autoComplete: 'off',
                                style: {
                                    borderRadius: '6px',
                                    fontSize: 'medium',
                                },
                            }}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            id="numeroTelephone-textfield"
                            variant="outlined"
                            size="small"
                            placeholder="0123456789"
                            label="Téléphone"
                            name="numeroTelephone"
                            error={error === 'telephone'}
                            helperText={error === 'telephone' ? errorText : ''}
                            value={telephone.replace(/(\d{3})(.{2})(.{3})(.{2})/, '$1 $2 $3 $4')}
                            onChange={handleTelephoneChange}
                            InputLabelProps={{
                                shrink: true,
                                size: 'small',
                                sx: {
                                    fontSize: 'medium',
                                },
                            }}
                            InputProps={{
                                autoComplete: 'off',
                                style: {
                                    borderRadius: '6px',
                                    fontSize: 'medium',
                                },
                            }}
                        />
                    </FormControl>
                </div>

                <br />
                <div className="flex justify-center items-center gap-4">
                    <Button
                        fullWidth
                        variant="contained"
                        size="medium"
                        disableElevation
                        type="submit"
                    >
                        Confirmer
                    </Button>
                    <Button
                        fullWidth
                        variant='outlined'
                        color='secondary'
                        size="medium"
                        onClick={handleCancel}
                    >
                        Annuler
                    </Button>
                </div>
            </Box>
        </LocalizationProvider>
    );
}

export default EtudiantForm;