import React, { useState } from 'react'
import './../styles/Shop.scss'
import { Button } from '@mui/material'
import { FaCartPlus } from 'react-icons/fa'

export default function Shop({products}) {
  const [selectedCategory,setSelectedCategory] = useState('all')

  const filterCategoryProduct = selectedCategory === 'all' ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <>
      <div className="shop-page">
        <div className="filter-buttons">
          <Button variant='outlined' color='primary' onClick={() => setSelectedCategory('all')} className='filter-btn'>
              All
          </Button>
          <Button variant='outlined' color='primary' onClick={() => setSelectedCategory('coffee')} className='filter-btn'>
              Coffee
          </Button>
          <Button variant='outlined' color='primary' onClick={() => setSelectedCategory('dessert')} className='filter-btn'>
              Desserts
          </Button>
        </div>
      <div className='cards'>
        <div className="container-cards">
           {filterCategoryProduct.map((p)=>(
              <div key={p.id} className="product">
                <img src={p.img} alt="" />
                <div className="product__info">
                   <p>
                    {p.name}
                   </p>
                    <p>
                    {p.price}$  
                    </p> 
                    <Button variant='contained' id='addToCart'>
                        <FaCartPlus/>
                     </Button>
                    </div>                       
                  </div>
                  ))}
                </div>
          </div>  
      </div>  
    </>
  )
}
