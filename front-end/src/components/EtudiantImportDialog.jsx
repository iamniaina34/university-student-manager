import React, { useEffect, useState } from 'react'
import EtudiantImportDropzone from './EtudiantImportDropzone';
import DialogForm from './DialogForm';

function EtudiantImportDialog({ open = false, onImport, onClose = () => {} }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    }

    const handleEtudiantImport = (importedData) => {
        handleClose();
        onImport(importedData)
    }

    useEffect(() => {
        setIsOpen(open);
    }, [open])

    return (
        <React.Fragment>
            <DialogForm
                open={isOpen}
                title={`Importation d'étudiants`}
                onClose={handleClose}
            >
                <EtudiantImportDropzone
                    onImport={handleEtudiantImport}
                    onCancel={handleClose}
                />
            </DialogForm>
        </React.Fragment>
    )
}

export default EtudiantImportDialog