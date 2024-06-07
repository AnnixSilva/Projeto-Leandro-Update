import React from "react";
import './cardapio-g.css';
import {Link} from 'react-router-dom'

function CardapioGeral(){
    return(
        <div className="celular">
            <img className="cardapio-geral" src={require('../assets/cardapio geral.png')} width={850}/>
            <img className="cardapio-bovino" src={require('../assets/cardapio bovino.png')} width={750}/>
            <Link to='/cardapiosuíno'>
                <img className="cardapio-suino" src={require('../assets/cardapio suino.png')} width={750}/>
            </Link>
            <img className="cardapio-aviario" src={require('../assets/cardapio aviario.png')} width={750}/>
            <img className="cardapio-psciano" src={require('../assets/cardapio psciano.png')} width={750}/>
        
        </div>
    )
}

export default CardapioGeral;