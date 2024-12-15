import React from 'react'

export default function Cart({cart}) {
  return (
    <>
        {cart.map((item,index)=>(
            <div key={index.id}>
                {item.name}
            </div>
        ))}
    </>
  )
}
