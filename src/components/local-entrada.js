import React from "react";
import './local-entrada.css'
import { Link } from "react-router-dom";

function LocalEntrada () {
    return (
        <div className="leandro4">
            <img src={require('../assets/local-entrada.png')} alt='' className='local-entrada' width={650}/>
            <Link to='/'>
                <img className='voltar' src={require('../assets/voltar.png')} alt='' width={70}/>
            </Link>
            <Link to='/login'>
                <img src={require('../assets/login.png')} alt='' className='login' width={650}/>
            </Link>
            <Link to='/cadastro'>
                <img src={require('../assets/cadastro (2).png')} alt='' className='cadastro' width={650}/>
            </Link>
        </div>
    )
}

export default LocalEntrada;