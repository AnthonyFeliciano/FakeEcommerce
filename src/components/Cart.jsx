import React from 'react';
import style from './Cart.module.css';

function Cart({ item, updateQuantity }) {
    const formatarValor = (valor) => {
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
        if (newQuantity >= 1 && newQuantity <= 25) {
            updateQuantity(item.id, newQuantity);
        }
    };

    return (
        <div className={style.cartContainer}>
            <div className={style.cartImagem}>
                <img src={item.image} alt={item.title} />
            </div>
            <div className={style.CartContent}>
                <p>{item.title}</p>
                <p>{formatarValor(calcularPrecoTotal())}</p>
                <div className={style.cartBtn}>
                    <button onClick={() => handleQuantityChange(-1)} disabled={item.quantity <= 1}> - </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => handleQuantityChange(1)} disabled={item.quantity >= 25}> + </button>
                </div>
            </div>
            <div>
                <button>Remover</button>
            </div>
        </div>
    );
}

export default Cart;