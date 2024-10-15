import style from './ButtonAreaCupons.module.css';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

function ButtonAreaCupons({ text, submit }) {
    const [loading, setLoading] = useState(false);

    const callSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            submit(); // Chama a função submit após 2 segundos
        }, 3000); // Tempo de simulação do carregamento
    }

    return (
        <button 
            onClick={callSubmit} 
            className={style.buttonsAreaCupons}
            disabled={loading} // Desabilita o botão enquanto está carregando
        >
            {loading ? (
                <CircularProgress size={18} style={{ color: '#FFF' }} /> // Cor personalizada aqui
            ) : (
                text // Texto original do botão
            )}
        </button>
    );
}

export default ButtonAreaCupons;
