import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    window.location.href = "/etudiants";
  }, []);

  return null; // Ou vous pouvez rendre un composant vide si nécessaire
}

export default Home;
