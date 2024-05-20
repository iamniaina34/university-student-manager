import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import EtudiantListItem from './EtudiantListItem';
import EmptyEtudiantListItem from './EmptyEtudiantListItem';
import EtudiantListLoadingSkeleton from './EtudiantListLoadingSkeleton';

function EtudiantList({ etudiantList: initialEtudiantList }) {

    const [etudiantList, setEtudiantList] = useState(initialEtudiantList);
    
    const columns = [
        { field: 'numeroMatricule', headerName: 'IM', width: 70 },
        { field: 'nom', headerName: 'Nom', width: 130 },
        { field: 'prenom', headerName: 'Prénom', width: 130 },
        { field: 'niveau', headerName: 'Niveau', width: 130 },
        { field: 'parcours', headerName: 'Parcours', width: 130 },
        {
            field: 'fullName',
            headerName: 'Noms',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.nom || ''} ${row.prenom || ''}`,
        },
    ];

    useEffect(
        () => {
            if (initialEtudiantList !== etudiantList) {
                setEtudiantList(initialEtudiantList);
            }
        },
        [initialEtudiantList]
    );

    return (
        <div className='flex flex-col justify-center rounded-2xl py-2'>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={etudiantList}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />
                    </div>
        </div>
    );
}

export default EtudiantList;
