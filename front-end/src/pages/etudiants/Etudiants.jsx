import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import EtudiantList from '../../components/etudiants/EtudiantList';
import { Container, Divider, Typography } from '@mui/material';
import { EtudiantAPI } from '../../api/entities';
import EtudiantListController from '../../components/etudiants/EtudiantListController';

export class Etudiants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            etudiants: [],
            filteredEtudiants: [],
        };
    }

    componentDidMount() {
        EtudiantAPI.get()
            .then(etudiants => {
                this.setState({
                    etudiants: etudiants,
                    filteredEtudiants: etudiants,
                });
            })
            .catch(error => console.error(error));
    }

    filterEtudiants = (searchValue) => {
        const { etudiants } = this.state;
        const filteredEtudiants = etudiants.filter(etudiant => {
            return (
                etudiant.numeroMatricule.toLowerCase().includes(searchValue.toLowerCase())
                ||
                etudiant.nom.toLowerCase().includes(searchValue.toLowerCase())
                ||
                etudiant.prenom.toLowerCase().includes(searchValue.toLowerCase())
            );
        });
        this.setState({ filteredEtudiants });
    }

    render() {
        const { filteredEtudiants } = this.state;
        return (
            <>
                <div className='body-container pb-4'>
                    <div className="scroll-container">
                        <div>
                            <NavBar />
                        </div>
                        <div>
                            <Container sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '24px'
                            }}>
                                <EtudiantListController onSearch={this.filterEtudiants} />
                                <EtudiantList etudiantList={filteredEtudiants} />
                            </Container>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Etudiants;
