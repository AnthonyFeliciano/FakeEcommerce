import React, { useState } from 'react';
import style from './InputCart.module.css';
import ButtonAreaCupons from './ButtonAreaCupons';

function InputCart({ textBtn, placeholder, name, id }) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        let elementName = event.target.name
        if(elementName === 'cep'){
            const inputValue = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
            let formattedValue = '';

        // Formata o CEP para o padrão 00000-000
            if (inputValue.length > 5) {
                formattedValue = `${inputValue.slice(0, 5)}-${inputValue.slice(5, 8)}`;
            } else {
                formattedValue = inputValue;
            }

            setValue(formattedValue);
            //console.log(formattedValue)
        }
        if(elementName === 'desconto' ){
            setValue(event.target.value)
        }
    };

    const submitInput = () => {

    }

    return (
        <div className={style.inputCart}>
            <input 
                type="text" 
                placeholder={placeholder} 
                name={name} 
                id={id}
                value={value} // Adiciona o valor formatado ao input
                onChange={handleChange} // Adiciona o evento onChange
                maxLength="10" // Limita a entrada a 10 caracteres
            />
            <ButtonAreaCupons submit={submitInput} text={textBtn} />
        </div>
    );
}

export default InputCart;
