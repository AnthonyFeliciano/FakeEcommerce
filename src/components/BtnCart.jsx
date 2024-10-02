import style from './BtnCart.module.css'
import { FaShoppingCart } from "react-icons/fa";

function BtnCart ({click,text}) {

    return (
        <div className={style.btnCart}>
            <button onClick={click}>
            <FaShoppingCart/> {text} 
            </button>
        </div>
    )
}

export default BtnCart