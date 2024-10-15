import './App.css';
import { useEffect, useState, useCallback } from 'react';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import Loading from './components/Loading';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ResultSearch from './components/ResultSearch';
import NoResult from './components/NoResult';

function App() {
  const [products, setProducts] = useState([]); // Lista original de produtos
  const [filteredProducts, setFilteredProducts] = useState([]); // Produtos filtrados
  const [inputBuscarItem, setInputBuscarItem] = useState(''); // Inicializa como string
  const [cart, setCart] = useState(() => {
    // Tenta carregar o carrinho do localStorage ao iniciar o componente
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectCategoria, setSelectCategoria] = useState('');
  const [sort, setSort] = useState('asc');
  const [typeListProducts, setTypeListProducts] = useState('productContainerBlock');
  const [showInfoHamburguer, setShowInfoHamburguer] = useState('');
  const [countCart, setCountCart] = useState(0);

  // Uso de useCallback para memorizar a função fetchProducts e evitar loops
  const fetchProducts = useCallback(() => {
    setRemoveLoading(false);
    const url = selectCategoria 
      ? `https://fakestoreapi.com/products/category/${selectCategoria}?sort=${sort}`
      : `https://fakestoreapi.com/products?sort=${sort}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Inicializa a lista filtrada com a lista original
        setRemoveLoading(true);
      })
      .catch((error) => console.log(error));
  }, [selectCategoria, sort]); // Dependências necessárias

  // Chamando fetchProducts e fetchCategories uma vez ao carregar o componente
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts]);

  const fetchCategories = () => {
    fetch(`https://fakestoreapi.com/products/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error));
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) => 
          item.id === product.id && item.quantity < 25 ?{ ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setSideBarIsOpen(true);
  };

  const updateCartItemQuantity = (id, newQuantity) => {
    setCart((prevCart) => 
      prevCart.map((item) => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const removeCartItem = (id) => {
    setCart((prevCart) => 
      prevCart.map((item) => 
        item.id === id ? { ...item, quantity: 0 } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  useEffect(() => {
    let count = cart.reduce((total, item) => total + item.quantity, 0);
    setCountCart(count);
    
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const buscarItem = (valor) => {
    setInputBuscarItem(valor); 
  };

  useEffect(() => {
    if (inputBuscarItem.trim()) { // Verifica se o input não está vazio
      const filtered = products.filter((item) => {
        if (item.title) {
          return item.title.toLowerCase().includes(inputBuscarItem.toLowerCase()); // Filtra produtos que contêm o texto
        }
        return false;
      });
      setFilteredProducts(filtered); // Atualiza a lista filtrada
    } else {
      setFilteredProducts(products); // Se o input estiver vazio, exibe todos os produtos
    }
  }, [inputBuscarItem, products]); // Monitora as mudanças no input e na lista de produtos

  const toggleSidebar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };

  const handleSelectChangeCategories = (value, index) => {
    setSelectCategoria(index > 0 ? value : '');
  };

  const handleSelectChangeOrdenar = (value) => {
    setSort(value);
  };

  const order = (value) => {
    setTypeListProducts(value);
  };

  const clickShowInfoHamburguer = (value) => {
    setShowInfoHamburguer(value === '' ? 'action' : '');
  };

  // Efeito para adicionar ou remover a classe do body quando a sidebar estiver aberta
  useEffect(() => {
    if (sideBarIsOpen) {
      document.body.classList.add('modal-open'); // Adiciona a classe ao body
    } else {
      document.body.classList.remove('modal-open'); // Remove a classe do body
    }
  }, [sideBarIsOpen]); // Chama quando sideBarIsOpen muda

  return (
    <div className="App">
      <Navbar
        acaoButtonCart={toggleSidebar}
        clickShowInfoHamburguer={clickShowInfoHamburguer}
        showInfoHamburguer={showInfoHamburguer}
        buscarItem={buscarItem}
        valorInputBuscarItem={inputBuscarItem}
        countCart={countCart}
      />
      {inputBuscarItem !== '' 
      ? <ResultSearch inputBuscarItem={inputBuscarItem}/>: ''}
      
      <Header
        order={order}
        typeListProducts={typeListProducts}
        categories={categories}
        handleSelectChangeOrdenar={handleSelectChangeOrdenar}
        handleSelectChangeCategories={handleSelectChangeCategories}
      />
      {removeLoading ? (
        <ProductList typeListProducts={typeListProducts} products={filteredProducts} addToCart={addToCart} />
      ) : (
        <div>
          <Loading />
          <NoResult />
        </div>
      )}

      <CartList 
        toggleSidebar={toggleSidebar} 
        cart={cart} 
        isOpen={sideBarIsOpen} 
        subtotal={calculateSubtotal()}
        updateCartItemQuantity={updateCartItemQuantity}
        removeCartItem={removeCartItem}
      />
      <Footer />
    </div>
  );
}

export default App;
