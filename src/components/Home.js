import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <img src={require('../assets/Group 45.png')} alt='' className='anniele'/>
            <img src={require('../assets/Group 38.png')} alt='' className='vitor'/>
            <Link to="/cardapio"><img src={require('../assets/Group 46 (1).png')} alt='' className='leandro' width={850}/></Link>
            <img src={require('../assets/Group 47.png')} alt='' className='leandro1' width={850}/>
            <img src={require('../assets/Group 48.png')} alt='' className='leandro2' width={850}/>
        </div>
    )
}

export default Home;