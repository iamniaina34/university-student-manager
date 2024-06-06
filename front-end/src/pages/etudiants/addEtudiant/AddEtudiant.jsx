import React from 'react'
import Heading from '../../../components/Heading'
import EtudiantForm from '../../../components/forms/EtudiantForm'

function AddEtudiant() {
    return (
        <React.Fragment>
            <Heading label={'Ajouter un nouvel etudiant'} />
            <EtudiantForm />
        </React.Fragment>
    )
}

export default AddEtudiant