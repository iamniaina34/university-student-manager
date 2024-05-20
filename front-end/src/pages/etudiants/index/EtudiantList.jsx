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
        width: 192
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
    }
    // Other columns
];

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
        <div style={{ height: window.innerHeight - 200, maxHeight: 1200, width: '100%' }}>
            <DataGrid
                density='standard'
                getRowId={row => row.numeroMatricule}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                disableRowSelectionOnClick
                checkboxSelection
                pageSizeOptions={[5, 10]}
                onRowClick={row => {handleRedirect(row.id)}}
            />
        </div>
    );
}
