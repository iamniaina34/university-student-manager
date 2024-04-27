import React, { useEffect } from 'react'
import { EtudiantAPI } from '../../api/table-entitites/entities';
import NavBar from '../../components/NavBar';

function Cours() {

    useEffect(() => {
        EtudiantAPI
        // Todo
    }, []);

    return (
        <div className="body-container">
            <NavBar />
            <div className="scroll-container">
                <div>Cours</div>
            </div>
        </div>
    )
}

export default Cours