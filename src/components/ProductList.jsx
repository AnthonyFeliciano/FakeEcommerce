import ProductCard from './ProductCard' 
import style from './ProductList.module.css'
function ProductList({products, addToCart}){

    return(
        <section className={style.ProductListContainer}>
            
            {products.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart}/>
            ))}
        </section>
    )
}

export default ProductList