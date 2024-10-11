import BtnCart from './BtnCart'
import style from './ProductCard.module.css'
import { FaStar } from "react-icons/fa6";

function ProjectCard({ product, addToCart, typeListProducts }) {
    const submitCart = e => {
        e.preventDefault()
        addToCart(product)
    }

    const formatPrice = product => {
        let formatProduct

        if (product.toString().indexOf('.') !== -1) {
            formatProduct = product.toString().replace('.', ',')
        } else {
            formatProduct = product.toString() + ',00'
        }

        return formatProduct
    }

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
                        <h2 className={style.price}>R$ {formatPrice(product.price)}</h2>
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
                            <h2 className={style.price}>R$ {formatPrice(product.price)}</h2>
                            <BtnCart click={submitCart} text="COMPRAR" />
                        </div>
                    </div>

                </div>





            }
        </>

    )
}

export default ProjectCard 