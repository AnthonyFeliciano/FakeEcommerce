
import Cart from './Cart';
import style from './CartList.module.css'
import { MdOutlineClose } from "react-icons/md";

function CartList ({toggleSidebar, carts, isOpen}){
    return (
        <div className={`${isOpen ? style.open: ''} ${style.cartContainer} `}>
            <div className={style.titleCart}>
                <h1>Minha Sacola</h1>
                <div className={style.btnClose}>
                    <MdOutlineClose onClick={toggleSidebar}/>
                </div>
            </div>
            <div className={style.productsCart}>
                {carts.map((cart) => (
                    <Cart key={cart.id} cart={cart}/>
                ))}
            </div>
            
        </div>
    )
}

export default CartList