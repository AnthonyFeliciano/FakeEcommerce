import style from './Input.module.css';
import { IoMdClose } from "react-icons/io";

function Input({ type, name, placeholder, buscarItem, valorInputBuscarItem = ''}) {


    const handleChange = e => {
        const value = e.target.value;
        buscarItem(value);
    }

    const limparPesquisa = () => {
        buscarItem('');
    }

    return (
        <div className={style.navSearch}>
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                value={valorInputBuscarItem}
                onChange={handleChange} 
            />
            <button onClick={limparPesquisa}>
                <IoMdClose />
            </button>
        </div>
    )
}

export default Input;
