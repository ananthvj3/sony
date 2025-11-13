import React, { useContext } from 'react'
import Card from '../component/Card'
import GlobalContext from '../GlobalContext'

const Products = () => {
  const {headPhone}=useContext(GlobalContext)
  console.log(headPhone)
  return (
    <>
    <Card productData={headPhone}/>
    </>
  )
}

export default Products