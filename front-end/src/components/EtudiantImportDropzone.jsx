import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ExcelJS from 'exceljs';
import { Button } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { NiveauAPI, ParcoursAPI } from '../api/entities';

export default function EtudiantImportDropzone({ onImport, onCancel = () => { } }) {
    const [data, setData] = useState([]);
    const [niveaux, setNiveaux] = useState([]);
    const [parcoursList, setParcoursList] = useState([]);

    const onDrop = async (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = async (event) => {
            const buffer = event.target.result;
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.load(buffer);
            const worksheet = workbook.getWorksheet(1);
            const json = [];

            worksheet.eachRow((row, rowNumber) => {
                if (rowNumber > 1) { // Assuming first row is header
                    const rowData = {};
                    row.eachCell((cell, colNumber) => {
                        rowData[`col${colNumber}`] = cell.value;
                    });
                    json.push(rowData);
                }
            });

            const etudiants = json.map(element => {
                const dateCin = element.col9
                const dateNaissance = element.col6
                const niveau = niveaux.find(n => n.niveauAcro.includes(element.col4))
                const parcours = parcoursList.find(p => p.parcoursAcro.includes(element.col5))
                const etudiant = {
                    numeroMatricule: element.col1,
                    nom: element.col2,
                    prenom: element.col3 || null,
                    dateNaissance: dayjs(dateNaissance).format('YYYY-MM-DD'),
                    lieuNaissance: element.col7 || null,
                    cin: element.col8 || null,
                    dateCin: dateCin !== '' ? dayjs(dateCin).format('YYYY-MM-DD') : null,
                    adresse: element.col11,
                    numeroTelephone: element.col10,
                    niveau: niveau === '' ? null : {
                        niveauId: niveau.niveauId,
                        niveauAcro: niveau.niveauAcro,
                        niveauDesign: niveau.niveauDesign,
                    },
                    parcours: parcours === '' ? null : {
                        parcoursId: parcours.parcoursId,
                        parcoursAcro: parcours.parcoursAcro,
                        parcoursDesign: parcours.parcoursDesign,
                    },
                }
                return etudiant;
            })
            setData(etudiants);
        };
        reader.readAsArrayBuffer(file);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleConfirm = () => {
        onImport(data)
    }

    useEffect(() => {
        NiveauAPI
            .index()
            .then(r => setNiveaux(r.data))
            .catch(e => console.log(e));
        ParcoursAPI
            .index()
            .then(r => setParcoursList(r.data))
            .catch(e => console.log(e));
    }, [])

    return (
        <div className="max-w-2xl mx-auto mt-4">
            <div
                {...getRootProps({ className: 'dropzone' })}
                className="flex flex-col items-center justify-center w-full h-10 p-10 text-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-blue-500"
            >
                <input {...getInputProps()} />
                <p className="text-gray-600">Sélectionner le fichier à importer</p>
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-center text-gray-700">Données Importées</h2>
            <pre className="max-h-32 p-4 mt-6 overflow-x-auto bg-gray-100 border rounded-lg">{JSON.stringify(data, null, 2)}</pre>
            <div className='flex flex-row justify-between mt-8 gap-4'>
                <Button
                    disableElevation
                    variant='contained'
                    size='medium'
                    fullWidth
                    onClick={handleConfirm}
                    disabled={data.length === 0}
                >
                    Confirmer
                </Button>
                <Button
                    fullWidth
                    variant='outlined'
                    color='secondary'
                    size='medium'
                    onClick={onCancel}
                >
                    Annuler
                </Button>
            </div>
        </div>
    );
}
