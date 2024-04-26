import React, { useEffect } from 'react'
import { EtudiantAPI } from '../api/table-entitites/entities';
import NavBar from '../components/NavBar';
import './page.css'

function Seances() {

    useEffect(() => {
        EtudiantAPI
        // Todo
    }, []);

    return (
        <div className="body-container">
            <NavBar />
            <div className="scroll-container">
                <div>Seances</div>
            </div>
        </div>
    )
}

export default Seances