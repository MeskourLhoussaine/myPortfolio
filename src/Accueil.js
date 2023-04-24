import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
import "primereact/resources/primereact.min.css";  

import { Card } from 'primereact/card';
import Navbar from './Navbar';
import Footer from './Footer';


      
    
function Acceuil() {
  return (
    <div>
   
    <Card className='App' style={{backgroundColor: '#0099ff' , color:'#003366',marginTop: '30px'}}>
    <img src="/mesk.jpg" alt="Image" width="250" style={{borderRadius:'50%'}}/>
    <h1>MESKOUR LHOUSSAINE</h1>
    <Navbar />
</Card> 

<Card title="Meskour Lhoussaine" style={{marginTop: '40px'}}>
    <p className="m-0">
    Je m'appelle Meskour Lhoussaine et je suis étudiant en informatique. J'ai étudié à Faculte Polydisciplinaire de Ouarzazate trois ans avant de rejoindre l'EMSI cette année. </p>
</Card>
<Footer/>
</div>
  );
}

export default Acceuil;
