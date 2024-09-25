import style from './Input.module.css'
import { FaSearch } from "react-icons/fa";


function Input({type, name, placeholder}){
    return (
        <div className={style.navSearch}>
            <input type={type} name={name} placeholder={placeholder} />
            <button><FaSearch /> Search</button>
        </div>
    )
}

export default Input