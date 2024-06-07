import React from "react";
import "./cardapio.css";
import {Link} from 'react-router-dom'

function Cardapio () {
    return (
        <div className="samuel">
                <img className='host' src={require('../assets/Group 49.png')} alt='' width={850}/>
                <Link to='/lombo'>
                    <img className='host1' src={require('../assets/Group 50.png')} alt=''/>
                </Link>
                <img className='host2' src={require('../assets/Group 51.png')} alt=''/>
                <img className='host3' src={require('../assets/Group 52.png')} alt=''/>
                <img className='host4' src={require('../assets/Group 53.png')} alt=''/>
                <img className='host5' src={require('../assets/Group 54 (1).png')} alt=''/>
                <img className='host6' src={require('../assets/Group 55.png')} alt=''/>
                <img className='host7' src={require('../assets/Group 56.png')} alt=''/>
                <img className='host8' src={require('../assets/Group 57.png')} alt=''/>
        </div>
    )
}

export default Cardapio;