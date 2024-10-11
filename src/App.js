import './App.css'
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList'
import CartList from './components/CartList'
import Loading from './components/Loading'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false)
  const [removeLoading, setRemoveLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [selectCategoria, setSelectCategoria] = useState('')
  const [sort, setSort] = useState('asc')
  const [typeListProducts, setTypeListProducts] = useState('productContainerBlock')
  const [showInfoHamburguer, setShowInfoHamburguer] = useState('')

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [])

  useEffect(() => {
    fetchProducts();
  }, [sort, selectCategoria])

  const fetchProducts = () => {
    setRemoveLoading(false);
    const url = selectCategoria 
      ? `https://fakestoreapi.com/products/category/${selectCategoria}?sort=${sort}`
      : `https://fakestoreapi.com/products?sort=${sort}`;

    fetch(url, {
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
  }

  const fetchCategories = () => {
    fetch(`https://fakestoreapi.com/products/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((error) => console.log(error))
  }

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setSideBarIsOpen(true);
  };

  const updateCartItemQuantity = (id, newQuantity) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const toggleSidebar = () => {
    setSideBarIsOpen(!sideBarIsOpen)
  }

  const handleSelectChangeCategories = (value, index) => {
    setSelectCategoria(index > 0 ? value : '');
  }

  const handleSelectChangeOrdenar = (value) => {
    setSort(value);
  }

  const order = value => {
    setTypeListProducts(value)
  }

  const clickShowInfoHamburguer = value => {
    setShowInfoHamburguer(value === '' ? 'action' : '')
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
      {products.length > 0 ? (
        <ProductList typeListProducts={typeListProducts} products={products} addToCart={addToCart} />
      ) : (
        <Loading />
      )}
      {!removeLoading && <Loading />}
      <CartList 
        toggleSidebar={toggleSidebar} 
        cart={cart} 
        isOpen={sideBarIsOpen} 
        subtotal={calculateSubtotal()}
        updateCartItemQuantity={updateCartItemQuantity}
      />
      <Footer />
    </div>
  );
}

export default App;