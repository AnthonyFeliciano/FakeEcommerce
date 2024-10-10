
import Cart from './Cart';
import style from './CartList.module.css'
import { MdOutlineClose } from "react-icons/md";
import { PiToteSimpleFill } from "react-icons/pi";
import InputCart from './InputCart';
import {useState} from 'react'

function CartList ({toggleSidebar, carts, isOpen}){

    const [subtotal, setSubtotal] = useState('0,00')

    
         


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
            
                <div className={style.valores}>
                    <div className={style.cupons}>
                            <p>
                                <span>Cupom de desconto</span> <InputCart textBtn='Adicionar' placeholder='Insira o desconto' name='desconto'/>
                            </p>
                            <p>
                                <span>Calcular Frete</span> <InputCart textBtn='Calcular' placeholder='Digite o CEP' name='cep'/>
                            </p>
                    </div>
                    setSubtotal  (carts.reduce((acc,valor) => acc + valor.price, 0)) 
                    <div className={style.totalEntrega}>
                            <p><span>Subtotal</span> R$ {subtotal}</p>
                            {/* <p><span>Entrega Total</span> {calculaFrete()}</p>
                            <p><span>Total</span> R$ {valorTotal()}</p> */}
                    </div>
              </div>

                <div className={style.action}>
                    <button className={style.buy}>
                        <PiToteSimpleFill className={style.iconTote}/>
                        <h3> FINALIZAR COMPRA</h3>
                    </button>
                    <button className={style.exit}>
                        <h3>VER MAIS PRODUTOS</h3>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default CartList