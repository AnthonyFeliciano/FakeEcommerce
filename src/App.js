import './App.css'
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList'
import CartList from './components/CartList'
import Loading from './components/Loading'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  const[products, setProducts] = useState([]);
  const[cart, setCart] = useState([]);
  const[sideBarIsOpen, setSideBarIsOpen] = useState(false)
  const[removeLoading, setRemoveLoading] = useState(false)
  const[categories, setCategories] = useState([])
  const[selectCategoria, setSelectCategoria] = useState('')
  const[sort, setSort] = useState('asc')
  const[typeListProducts, setTypeListProducts] = useState('productContainerBlock')
  const[showInfoHamburguer,setShowInfoHamburguer] = useState('')


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?sort=${sort}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setProducts(data)
      setRemoveLoading(true)
    })
    .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`,{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      
      setCategories(data)
    })
    .catch((error) => console.log(error))
  },[])


  const addToCart = (product) => {
    const existeNoCarrinho = cart.some(item => item.id === product.id);

    if(existeNoCarrinho){
      const atualizaValor = cart.map(item => {
        if(item.id === product.id){
          return {...item, price: item.price + item.price}
        }
        else{
          return item
        }
      })
      setCart(atualizaValor);
    }

    else{
      setCart([...cart, product]);
    }

    setSideBarIsOpen(true);

  };
  console.log(cart)

  const toggleSidebar = () => {
    setSideBarIsOpen(!sideBarIsOpen)
  }

  const handleSelectChangeCategories = (value, index) => {
    setRemoveLoading(false)
    
    if(index > 0) {
      fetch(`https://fakestoreapi.com/products/category/${value}?sort=${sort}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setSelectCategoria(value)
        setRemoveLoading(true)
      })
      .catch((error) => console.log(error))
    }


    else{
      fetch(`https://fakestoreapi.com/products?sort=${sort}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setSelectCategoria('')
        setRemoveLoading(true)
      })
      .catch((error) => console.log(error))
    }
    
  }

  const handleSelectChangeOrdenar = (value) => {
    setRemoveLoading(false)
    let url
    if(selectCategoria !== ''){
      url = `https://fakestoreapi.com/products/category/${selectCategoria}?sort=${value}`
    } else {
      url = `https://fakestoreapi.com/products?sort=${value}`
    }

    fetch(url, {
      method:'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setProducts(data)
      setSort(value)
      setRemoveLoading(true)
    })
  }

  const order = value => {
    setTypeListProducts(value)
    
  }

  const clickShowInfoHamburguer = value => {
    if(value === ''){
      setShowInfoHamburguer('action')
    } else {
      setShowInfoHamburguer('')
    }

  }
  
  return (
    <div className="App">
        <Navbar 
          acaoButtonCart={toggleSidebar} 
          clickShowInfoHamburguer={clickShowInfoHamburguer} 
          showInfoHamburguer={showInfoHamburguer}
        />
        <Header 
          order={order}
          typeListProducts={typeListProducts}
          categories={categories} 
          handleSelectChangeOrdenar={handleSelectChangeOrdenar}
          handleSelectChangeCategories={handleSelectChangeCategories}
        />

        

      {products ? (
        <ProductList typeListProducts={typeListProducts} products={products} addToCart={addToCart}/>
      ) :
      (<Loading/>)
    
    }

{!removeLoading && <Loading/>}
      
    
      <CartList toggleSidebar={toggleSidebar} carts={cart} isOpen={sideBarIsOpen}/>
      <Footer/>
      
    </div>
  );
}

export default App;
