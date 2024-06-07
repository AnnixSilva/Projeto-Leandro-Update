import React, { useState } from "react";
import './lombo.css';
import { Link } from "react-router-dom";

function Lombo() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="lombo-geral">
            <img className='banner1' src={require('../assets/banner suino1.png')} alt='' width={850}/>
            <img className='pagamento' src={require('../assets/lombo pagamento.png')} alt='' width={850}/>
            <img className='lombo-botao' src={require('../assets/lombo botao.png')} alt='' width={300}/>
            <Link to='/cardapiosuíno'>
                <img className='voltar' src={require('../assets/voltar.png')} alt='' width={50}/>
            </Link>

            <div className="checkbox-container">
                <label>
                    <input 
                        type="checkbox" 
                        checked={isChecked} 
                        onChange={handleCheckboxChange} 
                        className="checkbox"
                    />
                    <span className="checkmark">Quero Delivery</span>
                </label>
                <p>{isChecked}</p>
            </div>
        </div>
    );
}

export default Lombo;
