import React, { useEffect } from 'react'
import { EtudiantAPI } from '../api/table-entitites/entities';
import NavBar from '../components/NavBar';
import './page.css'

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
            <div className="scroll-container">
                <div>Etudiants</div>
            </div>
        </div>
    )
}

export default Etudiants