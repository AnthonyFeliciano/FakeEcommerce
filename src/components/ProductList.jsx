import ProductCard from './ProductCard' 
import style from './ProductList.module.css'
function ProductList({products, addToCart, typeListProducts}){

    return(
        <section className={`${style.ProductListContainer} ${style[typeListProducts]}`}>     
        {products.length > 0 ?     
            products.map((product) => (
                <ProductCard typeListProducts={typeListProducts} key={product.id} product={product} addToCart={addToCart}/>
            ))
          : 
          <div className={style.noResult}>
            Não foi encontrado nenhum produto ;(
          </div>
          }
        </section>
    )
}
export default ProductList