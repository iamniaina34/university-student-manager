import React, { useEffect } from 'react'
import { EtudiantAPI } from '../../api/entities';
import NavBar from '../../components/NavBar';

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