import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardProducts from '../CardProducts'
import './styles/similarProduct.css'

const SimilarProduct = ({product}) => {

    const [categories, setCategories] = useState()
    const [idCategory, setIdCategory] = useState()
    const [similarProduct, setSimilarProduct] = useState()

    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
        axios.get(URL)
        .then(res => setCategories(res.data.data.categories))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (categories && product) {
           setIdCategory(categories.filter(category => category.name === product.category)[0].id)
        }
    }, [categories, product])

    useEffect(() => {
        if(idCategory){
            const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${idCategory}`
            axios.get(URL)
            .then(res => setSimilarProduct(res.data.data.products))
            .catch(err => console.log(err))
        }
    }, [idCategory])
    
    console.log(similarProduct);

  return (
    <div className='similarproducts__container'>
        <h2 className='similarproducts__title'>Discover Similar Products</h2> 
        <div className='similarproducts__cards'>
            {
                similarProduct?.map(prod => {
                    if(product.id !== prod.id){
                        return <CardProducts 
                            key={prod.id}
                            product = {prod}
                        />
                    }
                })
            }
        </div>
    </div>
  )
}

export default SimilarProduct