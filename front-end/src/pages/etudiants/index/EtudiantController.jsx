import React, { useState } from 'react';
import { Button, ButtonGroup, FormControl, IconButton, InputAdornment, InputLabel, Menu, MenuItem, Select, TextField, Typography, createTheme } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Add, ImportExport } from '@mui/icons-material';
import { EtudiantAPI } from '../../../api/entities';
import { HttpStatusCode } from 'axios';
import EtudiantDialogForm from '../../../components/EtudiantDialogForm';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import EtudiantImportDialog from '../../../components/EtudiantImportDialog';

function EtudiantController(props) {
    const theme = createTheme();
    const { niveaux, parcoursList, onSearchValueChange, onNiveauChange, onParcoursChange, onEtudiantAdded } = props;
    const [searchValue, setSearchValue] = useState('');
    const [niveau, setNiveau] = useState('');
    const [parcours, setParcours] = useState('');
    const [open, setOpen] = useState(false);
    const [etudiantImportDialogOpen, setEtudiantImportDialogOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleSearchValueChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        onSearchValueChange(value);
    };

    const handleNiveauChange = (event) => {
        const value = event.target.value;
        setNiveau(value);
        onNiveauChange(value);
    };

    const handleParcoursChange = (event) => {
        const value = event.target.value;
        setParcours(value);
        onParcoursChange(value);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEtudiantAdded = (etudiant) => {
        handleClose();
        onEtudiantAdded(etudiant);
    }

    const handleMoreAddBtnClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMoreAddBtnClose = () => {
        setAnchorEl(null);
    }

    const showEtudiantImportDialog = () => {
        setAnchorEl(null);
        setEtudiantImportDialogOpen(true);
    }

    const handleEtudiantImportDialogClose = () => {
        setEtudiantImportDialogOpen(false);
    }

    const handleImport = (importedData) => {
        props.onImport(importedData)
    }

    return (
        <div className='h-10 flex justify-between gap-4 items-center'>
            <div id='filter' className='flex gap-4'>
                <FormControl>
                    <TextField
                        id='search-textfield'
                        variant='outlined'
                        size='small'
                        placeholder='Jon Snow, 1234H-F...'
                        label="Rechercher"
                        value={searchValue}
                        onChange={handleSearchValueChange}
                        InputLabelProps={{
                            size: 'small',
                            sx: {
                                fontSize: 'small',
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchRoundedIcon />
                                </InputAdornment>
                            ),
                            autoComplete: 'off',
                            style: {
                                borderRadius: '8px',
                                fontSize: 'small',
                            },
                        }}
                        sx={{
                            width: '256px',
                            [theme.breakpoints.down('md')]: {
                                width: '128px',
                            },
                        }}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel
                        id="niveau-select-label"
                        size='small'
                        sx={{
                            fontSize: 'small',
                        }}
                    >
                        Niveau
                    </InputLabel>
                    <Select
                        labelId='niveau-select-label'
                        id='niveau-select'
                        value={niveau}
                        label="Niveau"
                        onChange={handleNiveauChange}
                        size='small'
                        sx={{
                            fontSize: 'small',
                            borderRadius: '8px',
                            minWidth: '128px',
                        }}
                    >
                        <MenuItem
                            value={''}
                            sx={{
                                fontSize: 'small',
                            }}
                        >
                            Tout
                        </MenuItem>
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
                <FormControl>
                    <InputLabel
                        id="parcours-select-label"
                        size='small'
                        sx={{
                            fontSize: 'small',
                        }}
                    >
                        Parcours
                    </InputLabel>
                    <Select
                        labelId='parcours-select-label'
                        id='parcours-select'
                        value={parcours}
                        label="Parcours"
                        onChange={handleParcoursChange}
                        size='small'
                        sx={{
                            fontSize: 'small',
                            borderRadius: '8px',
                            minWidth: '128px',
                        }}
                    >
                        <MenuItem
                            value={''}
                            sx={{
                                fontSize: 'small',
                            }}
                        >
                            Tout
                        </MenuItem>
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
            <div id='more'>
                <ButtonGroup
                    disableElevation
                    variant='contained'
                    size='medium'
                >
                    <Button
                        onClick={handleOpen}
                        sx={{
                            fontSize: 'small',
                        }}
                    >
                        Ajouter
                    </Button>
                    <Button
                        onClick={handleMoreAddBtnClick}
                        sx={{
                            width: '12px'
                        }}
                    >
                        <ArrowDropDownIcon />
                    </Button>
                </ButtonGroup>
                <Menu
                    disableAutoFocus
                    id="dropdown-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMoreAddBtnClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem
                        onClick={showEtudiantImportDialog}
                        sx={{
                            py: 0,
                            mx: 'auto',
                            width: '132px',
                            fontSize: 'small',
                        }}
                    >
                        <div className="flex flex-row justify-between gap-4">
                            <Typography
                                variant='button'
                            >
                                Importer
                            </Typography>
                            <div>
                                <ImportExport />
                            </div>
                        </div>
                    </MenuItem>
                </Menu>
            </div>
            <EtudiantDialogForm
                open={open}
                usage='add'
                title={'Ajouter un étudiant'}
                onClose={handleClose}
                onEtudiantAdded={handleEtudiantAdded}
            />
            <EtudiantImportDialog
                onImport={handleImport}
                onClose={handleEtudiantImportDialogClose}
                open={etudiantImportDialogOpen}
            />
        </div>
    );
}

export default EtudiantController;