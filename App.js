import React from 'react';
import {Link} from 'react-router-dom';
import Pegawai from './Component/Pegawai';

class App extends React.Component{
    render = () => {
        return(
          <div> <hr/>
            <Link to="/pegawai" className="nav-Link">Daftar Pegawai</Link>
            <Pegawai/>
          </div>
        );
    }
}

export default App;