import React from 'react';
import style from './Cart.module.css';
import { FaRegTrashAlt } from "react-icons/fa";

function Cart({ item, updateQuantity, removeItem}) {
    const formatarTitulo = valor => {
        let novoTitulo = valor.slice(0, 18)
        novoTitulo += '...'
        return novoTitulo
    }
    const formatarValor = valor => {
        return valor.toLocaleString('pt-BR', { 
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
        });
    };

    const calcularPrecoTotal = () => {
        return item.price * item.quantity;
    };

    const handleQuantityChange = (change) => {
        const newQuantity = item.quantity + change;
        if (newQuantity <= 25) {
            updateQuantity(item.id, newQuantity);
        }
    };

    const handleRemoveItem = () => {
        removeItem(item.id)
    }

    return (
        <div className={style.cartContainer}>
            <div className={style.cartImagem}>
                <img src={item.image} alt={item.title} />
            </div>
            <div className={style.CartContent}>
                <div className={style.rowName}>
                    <div>
                        <p>{formatarTitulo(item.title)}</p>
                    </div>
                    <div>
                        <button onClick={() => handleRemoveItem()}><FaRegTrashAlt/></button>
                    </div>
                </div>
                <p>{formatarValor(calcularPrecoTotal())}</p>
                <div className={style.cartBtn}>
                    <button onClick={() => handleQuantityChange(-1)} > - </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => handleQuantityChange(1)} disabled={item.quantity >= 25}> + </button>
                </div>
            </div>

        </div>
    );
}

export default Cart;