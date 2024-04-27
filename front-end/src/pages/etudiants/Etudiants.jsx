import React, { useEffect } from 'react'
import { EtudiantAPI } from '../../api/table-entitites/entities';
import NavBar from '../../components/NavBar';

function Etudiants() {

    useEffect(() => {
        EtudiantAPI
            .get()
            .then(res => { console.log(res) })
            .catch(err => { console.error(err) })
    }, []);

    return (
        <div className="body-container">
            <NavBar />
            <div className="scroll-container max-w-96">
                <div className="flex justify-center">
                    Liste des etudiants
                </div>
                <div className="flex justify-center">
                    Liste des etudiants
                </div>
                <div className="flex justify-center">
                    Liste des etudiants
                </div>

            </div>
        </div>
    )
}

export default Etudiants