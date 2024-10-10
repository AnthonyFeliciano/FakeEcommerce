import style from './Cart.module.css'
import {useState} from 'react';
function Cart ({cart}) {


 const [quantidadeItens, setQuantidadeItens] = useState(1)


    let price = () => {
        const precoIncial = cart.price
        let valorTotal = precoIncial * quantidadeItens
        valorTotal = valorTotal.toLocaleString('pt-BR',  { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
          });

        return valorTotal
    } 



 const addQuantidadeItens = id => {
    if(id === cart.id && quantidadeItens < 25){
         let qtd = quantidadeItens
         setQuantidadeItens (qtd += 1)
         
         
     }
     else return
 }  
 const removeQuantidadeItens = id => {
     if(id === cart.id && quantidadeItens> 0){
         let qtd = quantidadeItens
         setQuantidadeItens (qtd -= 1)
     }
     else return
 }
    return (
        <div className={style.cartContainer}>
            <div className={style.cartImagem} >
                <img src={cart.image} alt="" />
            </div>
            <div className={style.CartContent}>
                <p>{cart.title}</p>
                <p>{price()}</p>
                <div className={style.cartBtn}>
                    <button onClick={() =>  addQuantidadeItens(cart.id)}> + </button>
                    <p>{quantidadeItens}</p>
                    <button onClick={() => removeQuantidadeItens(cart.id)}> - </button>
                </div>
            </div>
        </div>
    )

}

export default Cart