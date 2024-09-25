import style from './Cart.module.css'

function Cart ({cart}) {

    return (
        <div className={style.cartContainer}>
            <div className={style.cartImagem} >
                <img src={cart.image} alt="" />
            </div>
            <div className={style.CartContent}>
                <p>{cart.title}</p>
                <div className={style.cartBtn}>
                    <button> + </button>
                    <p>2</p>
                    <button> - </button>
                </div>
            </div>
        </div>
    )

}

export default Cart