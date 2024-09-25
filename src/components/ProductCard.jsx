import style from './ProductCart.module.css'

function ProjectCard({product, addToCart}){
    let submitCart = e => {
        e.preventDefault()
        addToCart(product)
    }

    return (
        <div className={style.ProductCardContainer}>
            <div className={style.ProductCardImagem}>
                <img src={product.image} alt={product.title} />
            </div>
            <h4>{product.title}</h4>
            <p>{product.price}</p>
            <button onClick={submitCart}>Add Cart</button>
        </div>
    )
}

export default ProjectCard