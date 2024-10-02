import ProductCard from './ProductCard' 
import style from './ProductList.module.css'
function ProductList({products, addToCart, typeListProducts}){

    return(
        <section className={`${style.ProductListContainer} ${style[typeListProducts]}`}>
            
            {products.map((product) => (
                <ProductCard typeListProducts={typeListProducts} key={product.id} product={product} addToCart={addToCart}/>
            ))}
        </section>
    )
}

export default ProductList