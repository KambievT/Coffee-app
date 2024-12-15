import { Button, CircularProgress } from '@mui/material'
import React from 'react'
import './../styles/Home.scss'
import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Home({products,loading,handleAddToCart}) {
  
  const filterRecomend = products?.filter((p) => p.isRecomend === true )

  return (
    <>
      <main className="main">
        <div className="main__line"></div>
        <div className="main__info-container">
          <div className="main__info__description">
              <h1>
                When Life Gives You Lemons,Trade Them For Coffee!
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga atque blanditiis pariatur impedit deleniti. Natus suscipit repellendus quasi dicta iusto!  
              </p>            
            <Button id='get-promo' variant='contained'>
                Get Promo
            </Button>
          </div>
          <div className="main__info__img">
              <img src="/src/assets/coffee-main.png" alt="" />
          </div>
        </div>
        <div className="recomend-products">
          {loading ? (
              <CircularProgress color="inherit" />
            ) : (
              <div className='cards'>
                  <h2>Recomend</h2>
                <div className="container-cards">
                    {filterRecomend.map((p)=>(
                        <div key={p.id} className="product">
                          <img src={p.img} alt="alt" />
                          <div className="product__info">
                            <p>
                              {p.name}
                            </p>
                            <p>
                              {p.price}$  
                            </p> 
                            <Button variant='contained' id='addToCart'onClick={()=>handleAddToCart(p)} >
                                <FaCartPlus/>
                            </Button>
                          </div>                       
                        </div>
                    ))}
                </div>
                <Link to='/shop'>
                  <Button variant='contained' color='' id='more-product'>
                    More Coffee
                  </Button>
                </Link>
              </div>
            )}
        </div>
      </main>
    </>
  )
}
