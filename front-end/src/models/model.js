import dayjs from "dayjs";

export const Etudiant = {
    numeroMatricule: '',
    nom: '',
    prenom: '',
    dateNaissance: dayjs(),
    lieuNaissance: '',
    cin: '',
    dateCin: '',
    adresse: '',
    numeroTelephone: '',
    niveau: {
        niveauId: '',
    },
    parcours: {
        parcoursId: '',
    },
}