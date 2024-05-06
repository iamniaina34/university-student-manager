import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar';

function Cours() {

    useEffect(() => {
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