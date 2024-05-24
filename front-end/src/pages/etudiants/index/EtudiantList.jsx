import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { useState } from 'react';
import EtudiantAvatar from './EtudiantAvatar';
import { useNavigate } from 'react-router-dom';

const columns = [
    {
        field: 'Avatar',
        headerName: '',
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        width: 56,
        renderCell: (params) => <EtudiantAvatar etudiant={params.row} />
    },
    {
        field: 'numeroMatricule',
        headerName: 'Matricule',
        description: 'numero matricule',
        type: 'string',
        width: 128
    },
    {
        field: 'nom',
        headerName: 'Nom',
        type: 'string',
        width: 192,
    },
    {
        field: 'prenom',
        headerName: 'Prénom',
        type: 'string',
        width: 192
    },
    {
        field: 'niveau',
        headerName: 'Niveau',
        width: 128,
        valueGetter: (value, row) => row.niveau ? row.niveau.niveauAcro : '',
    },
    {
        field: 'parcours',
        headerName: 'Parcours',
        width: 128,
        valueGetter: (value, row) => row.niveau ? row.parcours.parcoursAcro : '',
    },
    {
        field: 'numeroTelephone',
        headerName: 'Téléphone',
        width: 128,
    },
    {
        field: 'adresse',
        headerName: 'Adresse',
        // width: 512,
        sortable: false,
    },
    // Other columns
];

const localText = {
    footerRowSelected: (count) => count !== 1 ? `${count.toLocaleString()} étudiants sélectionnés` : `${count.toLocaleString()} étudiant sélectionné`,
    MuiTablePagination: {
        labelDisplayedRows: ({from, to, count}) => `${from} à ${to} sur ${count !== 1 ? count : `plus de ${to}`} étudiants`,
        labelRowsPerPage: 'Nombre d\'étudiants par page: ',
    },
};

export default function EtudiantList(props) {

    const [rows, setRows] = useState([]);
    const navigate = useNavigate();

    const handleRedirect = (numeroMatricule) => {
        navigate(`/etudiants/${numeroMatricule}`);
    }    

    useEffect(() => {
        setRows(props.rows)
    }, [props.rows]);

    return (
        <div className={`${rows.length === 0 ? `h-40` : `h-full`}`}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={row => row.numeroMatricule}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10, 20, 50]}
                disableRowSelectionOnClick
                checkboxSelection
                localeText={localText}
                onRowClick={row => {handleRedirect(row.id)}}
            />
        </div>
    );
}
