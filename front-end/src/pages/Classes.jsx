import React, { useEffect } from 'react'
import NavBar from '../components/NavBar';
import './page.css'

function Classes() {

    useEffect(() => {
        // Todo
    }, []);

    return (
        <div className="body-container">
            <NavBar />
            <div className="scroll-container">
                <div>Classes</div>
            </div>
        </div>
    );
}

export default Classes