import React from 'react';
import Cart from './Cart';
import style from './CartList.module.css';
import { MdOutlineClose } from "react-icons/md";
import { PiToteSimpleFill } from "react-icons/pi";
import InputCart from './InputCart';

function CartList({ toggleSidebar, cart, isOpen, updateCartItemQuantity, removeCartItem }) {
    const calcularSubtotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const formatarValor = (valor) => {
        return valor.toLocaleString('pt-BR', { 
            style: 'currency', 
            currency: 'BRL',
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
        });
    };

    return (
        <div className={`${isOpen ? style.open: ''} ${style.cartContainer}`}>
            <div>
                <div className={style.titleCart}>
                    <h1>Meu Carrinho </h1>
                    <div className={style.btnClose}>
                        <MdOutlineClose onClick={toggleSidebar}/>
                    </div>
                </div>
                <div className={style.productsCart}>
                     { cart.length > 0 
                     ? 
                        cart.map((item) => (
                            <Cart 
                                key={item.id} 
                                item={item} 
                                updateQuantity={updateCartItemQuantity}
                                removeItem={removeCartItem}
                            />
                        ))
                     :
                     <div className={style.carrinhoVazio}>
                        Seu carrinho esta vazio ;(
                    </div>
                }
                </div>
            </div>
            <div className={style.totalCart}>
                <div className={style.valores}>
                    <div className={style.cupons}>
                        <p>
                            <span>Cupom de desconto</span> 
                            <InputCart 
                                textBtn='Adicionar' 
                                placeholder='Insira o desconto' 
                                name='desconto'
                                id='desconto'
                                />
                        </p>
                        
                        <p>
                            <span>Calcular Frete</span> 
                            <InputCart 
                                textBtn='Calcular' 
                                placeholder='Digite o CEP' 
                                name='cep'
                                id='cep'
                            />
                        </p>
                    </div>
                    <div className={style.totalEntrega}>
                        <p><span>Subtotal</span> {formatarValor(calcularSubtotal())}</p> 
                        <p><span>Entrega</span> GRÁTIS</p> 
                        <p><span>Total</span> {formatarValor(calcularSubtotal())}</p> 
                    </div>
                </div>
                <div className={style.action}>
                    <button className={style.buy}>
                        <PiToteSimpleFill className={style.iconTote}/>
                        <h3>FINALIZAR COMPRA</h3>
                    </button>
                    <button className={style.exit} onClick={toggleSidebar}>
                        <h3>VER MAIS PRODUTOS</h3>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default CartList;