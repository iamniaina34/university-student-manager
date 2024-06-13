import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { useState } from 'react';
import EtudiantAvatar from './EtudiantAvatar';
import { useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';
import dayjs from 'dayjs';
import CustomToolbar from '../../../components/CustomToolbar';
import DialogConfirmation from '../../../components/DialogConfirmation';
import EtudiantDialogForm from '../../../components/EtudiantDialogForm';
import { EtudiantAPI } from '../../../api/entities';
import { HttpStatusCode } from 'axios';

const columns = [
    {
        field: 'Avatar',
        headerName: '',
        sortable: false,
        filterable: false,
        resizable: false,
        disableColumnMenu: true,
        width: 60,
        renderCell: (params) => <EtudiantAvatar etudiant={params.row} size='2.2rem' />
    },
    {
        field: 'numeroMatricule',
        headerName: 'Matricule',
        description: 'numero matricule',
        type: 'string',
        width: 120,
    },
    {
        field: 'nom',
        headerName: 'Nom',
        description: 'Nom',
        type: 'string',
        width: 150,
    },
    {
        field: 'prenom',
        headerName: 'Prénom',
        description: 'Prénom',
        type: 'string',
        width: 150,
    },
    // {
    //     field: 'noms',
    //     headerName: 'Nom et prénoms',
    //     type: 'string',
    //     width: 250,
    //     valueGetter: (value, row) => `${row.nom} ${row.prenom || ''}`
    // },
    {
        field: 'niveau',
        headerName: 'Niveau',
        sortable: false,
        width: 120,
        valueGetter: (value, row) => row.niveau ? row.niveau.niveauAcro : '',
    },
    {
        field: 'parcours',
        headerName: 'Parcours',
        sortable: false,
        width: 120,
        valueGetter: (value, row) => row.niveau ? row.parcours.parcoursAcro : '',
    },
    {
        field: 'dateNaissance',
        headerName: 'Date de naissance',
        type: 'string',
        sortable: false,
        width: 200,
        valueGetter: (value, row) => dayjs(row.dateNaissance).format('DD/MM/YYYY')
    },
    {
        field: 'lieuNaissance',
        headerName: 'Lieu de naissance',
        type: 'string',
        sortable: false,
        width: 200,
    },
    {
        field: 'cin',
        headerName: 'CIN',
        type: 'string',
        sortable: false,
        width: 180,
        valueGetter: (value, row) => {
            return row.cin ? row.cin.replace(/(\d{3})(.{3})(.{3})(.{3})/, '$1 $2 $3 $4') : 'Non spécifié';
        },
    },
    {
        field: 'dateCin',
        headerName: 'Date de délivrance',
        type: 'string',
        sortable: false,
        width: 200,
        valueGetter: (value, row) => dayjs(row.dateCin).format('DD/MM/YYYY')
    },
    {
        field: 'numeroTelephone',
        headerName: 'Téléphone',
        sortable: false,
        width: 180,
        valueGetter: (value, row) => {
            return row.numeroTelephone ? row.numeroTelephone.replace(/(\d{3})(.{2})(.{3})(.{2})/, '$1 $2 $3 $4') : 'Non spécifié'
        },
    },
    {
        field: 'adresse',
        headerName: 'Adresse',
        sortable: false,
        width: 200,
        valueGetter: (v, r) => {
            return r.adresse ? r.adresse : 'Inconnu'
        },
    },
];

const localText = {
    noRowsLabel: "Aucun étudiant retrouvé",
    footerRowSelected: (count) => count !== 1 ? `${count.toLocaleString()} étudiants sélectionnés` : `${count.toLocaleString()} étudiant sélectionné`,
    MuiTablePagination: {
        labelDisplayedRows: ({ from, to, count }) => `${from} à ${to} sur ${count !== 1 ? count : `plus de ${to}`} étudiants`,
        labelRowsPerPage: 'Étudiants par page: ',
    },
};

export default function EtudiantList(props) {
    const { onRefresh, onEtudiantEdited, onEtudiantDeleted } = props;
    const [rows, setRows] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectedEtudiant, setSelectedEtudiant] = useState('');
    const navigate = useNavigate();
    const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(false);
    const [isEtudiantDialogFormOpen, setIsEtudiantDialogFormOpen] = useState(false);

    const handleRedirect = (numeroMatricule) => {
        navigate(`/etudiants/${numeroMatricule}`);
    };

    const handleRefresh = () => {
        onRefresh();
    };

    const handleEdit = (id) => {
        console.log('edit: ' + id);
        EtudiantAPI.get(id)
            .then(response => setSelectedEtudiant(response.data))
            .catch(error => {
                console.log(error.response.data)
            })
        setIsEtudiantDialogFormOpen(true);
    };

    const handleEtudiantDialogFormClose = () => {
        setIsEtudiantDialogFormOpen(false);
    };

    const handleEtudiantEdited = (etudiant, oldMatricule) => {
        onEtudiantEdited(etudiant, oldMatricule);
    }

    const handleDelete = (ids) => {
        EtudiantAPI.delete('0')
            .then(res => {
                if (res.status === HttpStatusCode.Ok) {
                    onEtudiantDeleted(ids);
                }
            })
            .catch(err => console.error(err.response.data))
        setIsConfirmationDialogOpen(false);
    };

    useEffect(() => {
        setRows(props.rows);
    }, [props.rows]);

    return (
        <div>
            <DataGrid
                autoHeight
                rows={rows}
                columns={columns}
                getRowId={row => row.numeroMatricule}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                    pinnedColumns: {
                        right: ['actions']
                    },
                }}
                pageSizeOptions={[1, 5, 10]}
                disableRowSelectionOnClick
                disableColumnMenu
                checkboxSelection
                localeText={localText}
                onRowClick={(row) => { handleRedirect(row.id) }}
                onRowSelectionModelChange={(newSelection) => {
                    setSelectedRows(newSelection);
                }}
                slots={{
                    toolbar: () => (
                        <>
                            <CustomToolbar
                                selectedRows={selectedRows}
                                onRefresh={handleRefresh}
                                onEdit={handleEdit}
                                onDelete={() => setIsConfirmationDialogOpen(true)}
                            />
                            <Divider />
                        </>
                    ),
                    footer: () => (<div></div>),
                }}
                sx={{
                    // height: 3000,
                    maxHeight: 735,
                    '& .MuiDataGrid-virtualScrollerContent': {
                        overflowY: 'auto',
                    },
                    '& .MuiDataGrid-cell': {
                        cursor: 'default',
                    },
                    '& .MuiDataGrid-cell:focus': {
                        outline: 'none',
                    },
                    '--DataGrid-overlayHeight': '52px',
                }}
            />
            <DialogConfirmation
                isOpened={isConfirmationDialogOpen}
                title={`Supprimer ${selectedRows.length === 1 ? `un etudiant` : selectedRows.length !== 0 && `des etudiants`}`}
                content={`Etes-vous sur de vouloir supprimer ${selectedRows.length === 1 ? `cet etudiant` : selectedRows.length !== 0 && `ces etudiants`} ? \nCette action sera irréversible.`}
                onConfirm={() => handleDelete(selectedRows)}
                onCancel={() => setIsConfirmationDialogOpen(false)}
                onClose={() => setIsConfirmationDialogOpen(false)}
            />
            <EtudiantDialogForm
                open={isEtudiantDialogFormOpen}
                usage='edit'
                title='Modifier un étudiant'
                etudiant={selectedEtudiant}
                onClose={handleEtudiantDialogFormClose}
                onEtudiantEdited={handleEtudiantEdited}
            />
        </div>
    );
}