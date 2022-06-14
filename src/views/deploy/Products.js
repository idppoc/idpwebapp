import React, {useEffect, useState} from 'react'
import {CCardm, CRow} from '@coreui/react'
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
      <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
        {products && products.length > 0 && products.map((v, i) => {
          return <ProductCard key={i} data={v}/>
        })}
      </CRow>
    </div>
  )
}

export default Products
