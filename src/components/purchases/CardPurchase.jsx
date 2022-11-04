import React from 'react'

const CardPurchase = ({purchase}) => {
    const fecha = [new Date(purchase.updatedAt).toDateString()]

    console.log(fecha.sort());

    
  return (
    <article className='purchase__container'>
        <header className='purchase__date'>{fecha}</header>
        <div className='purchase__content' >
            {
                purchase.cart.products.map(product => (
                    <div className='purchase__items' key={product.id}>
                        <div className='purchase__items-title'>{product.title}</div>
                        <div className='purchase__items-quantity'>{product.productsInCart.quantity}</div>
                        <div className='purchase__items-price'>${product.price}</div>
                    </div>
                ))
            }
        </div>
    </article>
  )
}

export default CardPurchase