import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Header from './components/Header'
import { Box, Button, Modal } from '@mui/material'
import { IoClose } from 'react-icons/io5'
import Shop from './pages/Shop'
import axios from 'axios'
import Cart from './pages/Cart'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'80%',
  maxHeight:'550px',
  height:'90%',
  overflowY: 'scroll',
  maxWidth:'300px',
  borderRadius:'20px',
  background: '#f6e6da67',
  backdropFilter:'blur(10px)',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function App() {
  const [open,setOpen] = useState(false)
  const [products,setProducts] = useState([])
  const [search,setSearch] = useState('')
  const [cart,setCart] = useState([])
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
      const fetchCart = async () => {
        try{
          const response = await axios.get('https://674b65c171933a4e88553b38.mockapi.io/products/cart')
          setCart(response.data)
        }catch(error){
          console.error('Ошибка в корзине',error)
        }
      }
      fetchCart()
    }, [])

    const handleAddToCart = async (productId) => {
      try {
        const response = await axios.get(`https://674b65c171933a4e88553b38.mockapi.io/products/products`);
        const product = response.data;
        await axios.post('https://674b65c171933a4e88553b38.mockapi.io/products/cart', product);
        setCart((prevCart) => [...prevCart, product]); // Обновляем корзину
        console.log('Product added to cart:', product);
      } catch (error) {
        console.error('Error adding product to cart:', error);
      }
    };
    


  const filterSearch = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  
  const [loading,setLoading] = useState(true)
  
  const getData = async () => {
    try {
    const response = await axios.get("https://674b65c171933a4e88553b38.mockapi.io/products/products")
    setProducts(response.data)
    setLoading(false)
    }
    catch {
      console.error('Ошибка',error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData();
  }, []) 

  return (
    <>
    <Header handleOpen={handleOpen}/>
      <Routes>
        <Route path='/' element={<Home products={products} loading={loading} handleAddToCart={handleAddToCart}/>}/>
        <Route path='/shop' element={<Shop products={products}/>}/>
        <Route path='/cart' element={<Cart cart={cart}/>}/>
      </Routes>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Button onClick={handleClose} variant="none" sx={{ mt: 2 }} id='close-modal'>
              <IoClose size={30}/>
          </Button>
          <input type="text" 
          className='modal-input'
          placeholder='Search Product'
          onChange={(e) => setSearch(e.target.value)} 
          value={search} />
          {filterSearch.length > 0 ? (
            <div>
              {filterSearch.map((p)=>(
                <div key={p.id} className='search-card'>
                  <img src={p.img} alt="" />
                  {p.name}
                </div>
              ))}
            </div>
          ):(<div>Not defined!</div>)}
        </Box>
      </Modal>          
    </>
  )
}
