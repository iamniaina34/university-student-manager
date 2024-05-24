import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    window.location.href = "/etudiants";
  }, []);

  return null;
}

export default Home;
