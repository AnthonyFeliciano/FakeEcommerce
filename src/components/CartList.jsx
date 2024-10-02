
import Cart from './Cart';
import style from './CartList.module.css'
import { MdOutlineClose } from "react-icons/md";

function CartList ({toggleSidebar, carts, isOpen}){
    return (
        <div className={`${isOpen ? style.open: ''} ${style.cartContainer} `}>
            <div>
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
            <div className={style.totalCart}>

                <div className={style.cupons}>
sfs
                </div>

              <div className={style.totalEntrega}>
fsf
              </div>

                <div className={style.action}>
                    <button>
                        teste
                    </button>
                    <button>
                        teste
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default CartList