import React, {useEffect, useState} from 'react'
import {CCard} from '@coreui/react'
import axios from 'axios'
import ProductCard from './ProductCard'

const Products = () => {
  const [products, setProducts] = useState({})

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_URL}/idpops/api/v1/getProducts`
    axios
      .get(url)
      .then((response) => {
        console.log('-------', response.data.products)
        setProducts(response.data.products)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="col">
      {products && products.length > 0 && products.map((v, i) => {
        return <CCard className="mb-4"> <ProductCard key={i} data={v}/> </CCard>
      })}
    </div>
  )
}

export default Products
