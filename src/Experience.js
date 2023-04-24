import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Panel } from 'primereact/panel';

function Experience() {
  return (
    <div className="App">
        <Navbar />
        <Panel header="Stages" style={{maxWidth: '1600px',margin:'0 auto',marginTop: '10px'}}>
           
        </Panel>
        
       
        <div style={{marginTop: '70px'}}></div> 

            <Footer/>
    </div>
  );
}

export default Experience;