import { Link, useLocation } from 'react-router-dom';
import { TabMenu } from 'primereact/tabmenu';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";  


import './App.css';


const items = [
    {label: 'Home', to: '/'},
    {label: 'Formations', to: '/formations'},
    {label: 'Experience',to: '/experience' },
    {label: 'Certificat', to: '/certificat'},
    
  ];

function Navbar() {
    const location = useLocation();
   

    
      

    return (

        <TabMenu  model={items.map(item => ({
            template: (
                <Link to={item.to}  style={{color:'#3d005f',fontWeight: 'bold',margin:'10px'}}>
                {item.label}
              </Link>
            ),
        }))} breakpoint="960px" style={{display: 'flex', justifyContent: 'center',backgroundColor:'#0099FF',borderRadius:'50%', boxShadow:'50px'}} />
    )
}

export default Navbar;
