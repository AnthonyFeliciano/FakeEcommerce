
import Input from './Input'
import style from './Navbar.module.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

function Navbar({acaoButtonCart}) {

    let toggleSidebar =  () => {
        acaoButtonCart()
    }

    return (
        <nav className={style.navbar}>
            <h1>E-Commerce</h1>
            <div className={style.inputSearch}>
                <Input type="text" name="input-search" placeholder="Pesquisar Produto"/>
            </div>
            <div className={style.icons}>
                <button onClick={toggleSidebar}><FaShoppingCart/></button>
                <button><FaUserAlt /></button>

            </div>
        </nav>
    )
}

export default Navbar