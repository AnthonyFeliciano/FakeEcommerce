import BtnCart from './BtnCart'
import style from './ProductCard.module.css'
import { FaStar } from "react-icons/fa6";

function ProjectCard({ product, addToCart, typeListProducts }) {
    const submitCart = e => {
        e.preventDefault()
        addToCart(product)
    }

    const formatarValor = valor => {
        return valor.toLocaleString('pt-BR', { 
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
        });
    };

    const titleSmall = title => {
        let newName = title.slice(0, 25)
        newName += '...'
        return newName
    }

    return (
        <>
            {typeListProducts === 'productContainerBlock' ?

                <div className={` ${style[typeListProducts]}`}>
                    <div className={style.stars}>
                        <span>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />

                        </span>
                    </div>
                    <div className={style.ProductCardImagem}>
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className={style.cardInfo}>
                        <h4 className={style.titleLong}>{product.title}</h4>
                        <h4 className={style.titleSmall}>{titleSmall(product.title)}</h4>
                        <h2 className={style.price}>{formatarValor(product.price)}</h2>
                    </div>
                    <BtnCart click={submitCart} text="COMPRAR" />
                </div>
                :

                <div className={`${style.ProductCardContainer} ${style[typeListProducts]}`}>

                    <div className={style.ProductCardImagem}>

                        <img src={product.image} alt={product.title} />
                    </div>


                    <div className={style.cardInfo}>
                        <div className={style.stars}>
                            <span>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                        </div>
                        <h4 className={style.titleLong}>{product.title}</h4>
                        <h4 className={style.titleSmall}>{titleSmall(product.title)}</h4>
                        <div className={style.cardInfoPrice}>
                            <h2 className={style.price}>{formatarValor(product.price)}</h2>
                            <BtnCart click={submitCart} text="COMPRAR" />
                        </div>
                    </div>

                </div>





            }
        </>

    )
}

export default ProjectCard 