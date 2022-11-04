import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/cartProduct.css'

const CartProduct = ({product}) => {
const dispatch = useDispatch()
const handleDelete = () => {
        const url = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
        axios.delete(url, getConfig())
        .then(res => {
            console.log(res)
            dispatch(getAllProductCart())
        })
        .catch(err => console.log(err))
    }

    console.log(product);
  return (
    <article className='cart__product'>
        <p className='cart__product__brand'>{product.brand}</p>
        <h2 className='cart__product__title'>{product.title}</h2>
        <div className='cart__product__list'>
            <div className='cart__product__item'><span className='cart__product__label'>Price</span><span className='cart__product__number'>{product.price}</span></div>
            <div className='cart__product__item'><span className='cart__product__quantity'>{product.productsInCart.quantity}</span></div>
            <button onClick={handleDelete} className='cart__product__btn'>
                <i className="fa-regular fa-trash-can cart__product__icon" />
            </button>
        </div>        
    </article>
  )
}

export default CartProduct