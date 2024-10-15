
import Input from './Input'
import style from './Navbar.module.css'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";

function Navbar({ acaoButtonCart, clickShowInfoHamburguer, showInfoHamburguer, buscarItem, countCart, valorInputBuscarItem}) {

    const toggleSidebar = () => {
        acaoButtonCart()
    }

    const showInfo = () => {
        clickShowInfoHamburguer(showInfoHamburguer)
    }

    return (
        <nav className={style.nav}>
            <div className={style.navbarSmall}>
                <div className={style.row}>
                    <div className={style.iconHamburguer}>
                        <button onClick={showInfo}><GiHamburgerMenu /></button>
                    </div>
                    <h1>E-Commerce</h1>
                    <div className={style.icons}>
                        <button onClick={toggleSidebar}><FaShoppingCart />{countCart ?
                            (<span className={style.countCart}>{countCart}</span>) : ''}</button>
                    </div>
                </div>

                <div className={style.row}>
                    <div className={style.inputSearch}>
                        <Input 
                            type="text" 
                            name="input-search" 
                            placeholder="Pesquisar Produto" 
                            buscarItem={buscarItem}
                            valorInputBuscarItem={valorInputBuscarItem}
                        />
                    </div>
                </div>
            </div>

            <div className={style.navbarLarge}>
                <div className={style.row}>
                    <h1>E-Commerce</h1>
                    <div className={style.inputSearch}>
                        <Input 
                            type="text" name="input-search" 
                            placeholder="Pesquisar Produto" 
                            buscarItem={buscarItem}
                            valorInputBuscarItem={valorInputBuscarItem}
                        />
                        
                    </div>
                    <div className={style.icons}>
                        <button onClick={toggleSidebar}><FaShoppingCart />
                        {countCart ?
                            (<span className={style.countCart}>{countCart}</span>) : ''}
                        </button>
                        <button><FaUserAlt /></button>
                    </div>
                </div>
            </div>
            {showInfoHamburguer === 'action' ?
                <div className={style.itensSmallNav}>
                    <div className={style.borderTop}>
                        <FaUserAlt /> Minha Conta
                    </div>
                </div>
                : ''
            }
        </nav>
    )
}

export default Navbar