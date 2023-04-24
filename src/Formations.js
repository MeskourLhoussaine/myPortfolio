import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Panel } from 'primereact/panel';

function Formations() {
  return (
    <div className="App">
      <Navbar />
      <Panel header="Mon parcour d'etude" style={{ maxWidth: '1600px', margin: '0 auto', marginTop: '10px', color: '#6600cc' }}>
        <p className="m-0">
          École Marocaine des Sciences de l'Ingénieur
          <h5>2022-aujourd'hui</h5>
        </p>
        <p className="m-0">
          Faculte Polydisciplinaire de Ouarzazate
          <h5>2018-2019</h5>
        </p>
        <p className="m-0">
          Faculte Polydisciplinaire de Ouarzazate
          <h5>2018-2019</h5>
        </p>
        <p className="m-0">
          Hmman El-Fatouaki
          <h5>Nodor </h5>
          <h5>2014-2015</h5>
        </p>
    </Panel>
      
      <div style={{ marginTop: '70px' }}></div>

      <Footer />
    </div>
  );
}

export default Formations;
